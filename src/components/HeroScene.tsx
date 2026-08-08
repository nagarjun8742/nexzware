import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, OrbitControls, Html } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Cloud, Code2, Database, ShieldCheck, Bot } from "lucide-react";

function GlassCube() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, dt) => {
    if (ref.current) {
      // Slow rotation
      ref.current.rotation.y += dt * 0.18;
      ref.current.rotation.x += dt * 0.05;

      // Gentle auto-bobbing along with rotation
      const time = state.clock.getElapsedTime();
      ref.current.position.y = Math.sin(time * 0.8) * 0.1;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.9}>
      <mesh ref={ref}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <MeshTransmissionMaterial
          thickness={0.7}
          roughness={0.03}
          transmission={1.0}
          ior={1.45}
          chromaticAberration={0.06}
          backside
          color="#a9c4ff"
          attenuationColor="#6D5DFC"
          attenuationDistance={1.0}
          distortion={0.2}
          distortionScale={0.3}
        />
      </mesh>
      <Html center distanceFactor={5.5}>
        <div
          className="grid place-items-center size-16 rounded-2xl text-white font-display font-bold text-3xl select-none"
          style={{
            background: "linear-gradient(135deg,#075CFF,#6D5DFC)",
            boxShadow: "0 0 50px rgba(7,92,255,0.85), inset 0 2px 2px rgba(255,255,255,0.4)",
            border: "1px solid rgba(255,255,255,0.2)"
          }}
        >
          N
        </div>
      </Html>
    </Float>
  );
}

function OrbitRing({ radius = 2.6, color = "#075CFF", tilt = 0 }: { radius?: number; color?: string; tilt?: number }) {
  return (
    <mesh rotation={[Math.PI / 2 + tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.012, 16, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.35} />
    </mesh>
  );
}

function Particles({ count = 150 }: { count?: number }) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 1.8 + Math.random() * 2.8;
    const t = Math.random() * Math.PI * 2;
    const p = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(p) * Math.cos(t);
    positions[i * 3 + 1] = r * Math.sin(p) * Math.sin(t) * 0.6;
    positions[i * 3 + 2] = r * Math.cos(p);
  }
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#075CFF" transparent opacity={0.65} />
    </points>
  );
}

function Platform() {
  return (
    <group position={[0, -1.3, 0]}>
      <mesh>
        <cylinderGeometry args={[1.7, 1.9, 0.08, 64]} />
        <meshStandardMaterial color="#dde9ff" metalness={0.4} roughness={0.15} transparent opacity={0.6} />
      </mesh>
      <mesh position={[0, -0.08, 0]}>
        <cylinderGeometry args={[1.4, 1.6, 0.04, 64]} />
        <meshStandardMaterial color="#bfd4ff" metalness={0.5} roughness={0.2} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

function Bubble3D({ position, size, speed, delay }: { position: [number, number, number]; size: number; speed: number; delay: number }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime() * speed + delay;
      // Floats up and down and sways side to side
      ref.current.position.y = position[1] + Math.sin(time) * 0.45;
      ref.current.position.x = position[0] + Math.cos(time * 0.6) * 0.25;
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.008;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <MeshTransmissionMaterial
        thickness={0.3}
        roughness={0.02}
        transmission={1.0}
        ior={1.25}
        chromaticAberration={0.04}
        backside
        color="#c8daff"
        attenuationColor="#6D5DFC"
        attenuationDistance={0.8}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function Floating3DBubbles() {
  const bubblesData: { pos: [number, number, number]; size: number; speed: number; delay: number }[] = [
    { pos: [-2.0, -0.6, 1.0], size: 0.16, speed: 0.9, delay: 0 },
    { pos: [2.1, 1.5, -0.6], size: 0.24, speed: 0.65, delay: 1.8 },
    { pos: [-1.4, 1.9, 0.7], size: 0.13, speed: 1.1, delay: 3.2 },
    { pos: [1.7, -0.9, 1.2], size: 0.19, speed: 0.75, delay: 4.8 },
    { pos: [0.0, 2.3, -1.2], size: 0.28, speed: 0.55, delay: 2.4 },
    { pos: [-2.5, 0.8, -0.5], size: 0.15, speed: 0.8, delay: 1.0 },
  ];
  
  return (
    <group>
      {bubblesData.map((b, i) => (
        <Bubble3D key={i} position={b.pos} size={b.size} speed={b.speed} delay={b.delay} />
      ))}
    </group>
  );
}

const FLOATERS: { icon: any; pos: [number, number, number]; bg: string; delay: number }[] = [
  { icon: Cloud, pos: [-2.4, 1.2, 0.5], bg: "linear-gradient(135deg,#7AB7FF,#3F8CFF)", delay: 0 },
  { icon: Code2, pos: [0.2, 2.0, 0.8], bg: "linear-gradient(135deg,#5A7DFF,#3D52FF)", delay: 0.4 },
  { icon: Database, pos: [2.5, 1.1, 0.4], bg: "linear-gradient(135deg,#6D5DFC,#9A6BFF)", delay: 0.8 },
  { icon: ShieldCheck, pos: [2.2, -0.4, 0.6], bg: "linear-gradient(135deg,#3F8CFF,#075CFF)", delay: 1.2 },
  { icon: Bot, pos: [-2.4, -0.2, 0.5], bg: "linear-gradient(135deg,#7B6BFF,#5749E0)", delay: 1.6 },
];

function Floater({ pos, bg, Icon, delay }: { pos: [number, number, number]; bg: string; Icon: any; delay: number }) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      // Respond slightly to mouse proximity
      const pointerX = state.pointer.x;
      const pointerY = state.pointer.y;
      
      // Float bobbing effect
      const t = state.clock.getElapsedTime() * 1.5 + delay;
      ref.current.position.y = pos[1] + Math.sin(t) * 0.15;
      
      // Subtle tilt responsive to mouse
      ref.current.rotation.x = pointerY * 0.15;
      ref.current.rotation.y = pointerX * 0.15;
    }
  });

  return (
    <group ref={ref} position={pos}>
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={1.4}>
        <Html center transform sprite distanceFactor={8}>
          <div
            className="grid place-items-center size-14 rounded-2xl text-white select-none hover:scale-110 transition-transform duration-300 cursor-pointer"
            style={{
              background: bg,
              boxShadow: "0 10px 30px -8px rgba(7,92,255,0.5), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            <Icon className="size-6 animate-pulse" strokeWidth={2.2} />
          </div>
        </Html>
      </Float>
    </group>
  );
}

function ResponsiveGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gently tilt the whole group according to the cursor coordinates
      const targetRotateX = state.pointer.y * -0.25;
      const targetRotateY = state.pointer.x * 0.25;
      
      // Linear interpolation (lerp) for smooth tilt
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotateX, 0.08);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotateY, 0.08);
    }
  });
  
  return <group ref={groupRef}>{children}</group>;
}

export function HeroScene() {
  return (
    <div className="relative w-full aspect-square max-w-[640px] mx-auto z-10">
      {/* Soft radial aura backdrop */}
      <div
        className="absolute inset-8 rounded-full blur-3xl opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(7,92,255,0.4), transparent 70%)" }}
      />
      <Canvas camera={{ position: [0, 0.3, 6], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[-3, -2, 3]} intensity={1.0} color="#6D5DFC" />
          <pointLight position={[3, 3, -2]} intensity={0.5} color="#075CFF" />
          <Environment preset="city" />
          
          <ResponsiveGroup>
            <GlassCube />
            <OrbitRing radius={2.6} tilt={0.2} />
            <OrbitRing radius={3.1} color="#6D5DFC" tilt={-0.3} />
            <Particles />
            <Platform />
            <Floating3DBubbles />
            {FLOATERS.map((f, i) => (
              <Floater key={i} pos={f.pos} bg={f.bg} Icon={f.icon} delay={f.delay} />
            ))}
          </ResponsiveGroup>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.8} 
            enableRotate={true} /* Enable manual rotation so user can interact! */
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
