import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
  color: string;
  angle: number;
  swaySpeed: number;
}

export function BubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let bubbles: Bubble[] = [];
    
    // Slightly more bubbles since they are distributed across the whole viewport now
    const bubbleCount = 65;

    // Harmonious colors inspired by the brand oklch colors (blue to purple gradient vibe)
    const bubbleColors = [
      "rgba(7, 92, 255, 0.12)",   // Brand Blue (semi-trans)
      "rgba(109, 93, 252, 0.12)", // Brand Purple (semi-trans)
      "rgba(63, 140, 255, 0.08)", // Light Blue (semi-trans)
      "rgba(154, 107, 255, 0.08)",// Lavender (semi-trans)
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initBubbles = (width: number, height: number) => {
      bubbles = [];
      for (let i = 0; i < bubbleCount; i++) {
        bubbles.push(createBubble(width, height, true));
      }
    };

    const createBubble = (width: number, height: number, initAllY = false): Bubble => {
      const radius = Math.random() * 26 + 8; // Bubbles from 8px to 34px
      return {
        x: Math.random() * width,
        y: initAllY ? Math.random() * height : height + radius + 10,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.45 + 0.25), // Float upwards slowly
        radius,
        alpha: 0, // Fade in
        targetAlpha: Math.random() * 0.55 + 0.15, // Max opacity
        color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
        angle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.015 + 0.005,
      };
    };

    const updateAndDraw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      bubbles.forEach((b, idx) => {
        // Fade in alpha initially
        if (b.alpha < b.targetAlpha) {
          b.alpha += 0.008;
        }

        // Horizontal sway
        b.angle += b.swaySpeed;
        const sway = Math.sin(b.angle) * 0.22;

        // Mouse interaction (repel relative to viewport coordinates)
        if (mouseRef.current.active) {
          const dx = b.x - mouseRef.current.x;
          const dy = b.y - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          const repelRadius = 160;

          if (dist < repelRadius) {
            const force = (repelRadius - dist) / repelRadius;
            const angle = Math.atan2(dy, dx);
            
            // Push away from mouse
            b.x += Math.cos(angle) * force * 4.0;
            b.y += Math.sin(angle) * force * 4.0;
            
            // Speed up velocity slightly
            b.vx += Math.cos(angle) * force * 0.06;
            b.vy += Math.sin(angle) * force * 0.06;
          }
        }

        // Apply physics
        b.x += b.vx + sway;
        b.y += b.vy;

        // Friction to return to normal speed
        b.vx *= 0.98;
        if (b.vy < -1.5) b.vy *= 0.95; // Limit max upward speed

        // Boundary checks - recycle bubbles that float off screen
        if (b.y < -b.radius || b.x < -b.radius || b.x > width + b.radius) {
          bubbles[idx] = createBubble(width, height, false);
        }

        // Draw bubble
        ctx.beginPath();
        const grad = ctx.createRadialGradient(
          b.x - b.radius * 0.2,
          b.y - b.radius * 0.2,
          b.radius * 0.1,
          b.x,
          b.y,
          b.radius
        );
        
        // Shiny specular highlight and transparent body
        grad.addColorStop(0, "rgba(255, 255, 255, 0.45)");
        grad.addColorStop(0.25, b.color.replace("0.12", `${b.alpha}`));
        grad.addColorStop(0.8, b.color.replace("0.12", `${b.alpha * 0.4}`));
        grad.addColorStop(1, "rgba(255, 255, 255, 0.0)");

        ctx.fillStyle = grad;
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle outer highlight ring
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${b.alpha * 0.28})`;
        ctx.lineWidth = 0.8;
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    resizeCanvas();
    initBubbles(window.innerWidth, window.innerHeight);
    updateAndDraw();

    const handleResize = () => {
      resizeCanvas();
      initBubbles(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-[-1]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
