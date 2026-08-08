export const SITE = {
  name: "NEXZWARE",
  tagline: "Technology For Tomorrow",
  phone: "+91 97910 70214",
  phoneDisplay: "97910 70214",
  whatsapp: "919791070214",
  address: "32/20, Railway Colony 3rd Street, Aminjikarai, Chennai 600 029",
  email: "hello@nexzware.com",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Technologies", to: "/technologies" },
  { label: "Contact", to: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string; // lucide name
  long: string;
  features: string[];
  technologies: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "software-development",
    title: "Software Development",
    short: "Custom, scalable, high-performance enterprise software.",
    icon: "Code2",
    long: "Bespoke software engineered for performance, security and scale — from internal tools to enterprise-grade platforms.",
    features: ["Custom Software", "Web Applications", "Mobile Applications", "ERP", "CRM", "Enterprise Solutions"],
    technologies: ["Java", "Spring Boot", "React", "Angular", "Node.js", "PHP", "Python", "MySQL", "MongoDB", "AWS"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    short: "High-performance, SEO-friendly, responsive websites.",
    icon: "Globe",
    long: "Modern websites that load fast, rank high and convert visitors — built on the right stack for your business.",
    features: ["Business Websites", "E-Commerce Websites", "Portfolio Websites", "Corporate Websites", "School Websites", "Hospital Websites"],
    technologies: ["WordPress", "Laravel", "React", "PHP", "HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Native and cross-platform apps people love to use.",
    icon: "Smartphone",
    long: "Android, iOS and cross-platform apps designed and engineered for delightful experiences and serious scale.",
    features: ["Android Apps", "iOS Apps", "Flutter Apps", "React Native Apps", "Enterprise Apps"],
    technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Java", "Firebase"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Graphic Design",
    short: "Designs that inspire — experiences that convert.",
    icon: "Palette",
    long: "Research-led product design and bold visual identity that makes your brand unforgettable.",
    features: ["User Research", "Wireframing", "Prototyping", "Branding", "Social Media Creatives", "Brochure Design"],
    technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Smart strategies. Real results.",
    icon: "TrendingUp",
    long: "Data-driven marketing that brings more traffic, more leads and more conversions to your business.",
    features: ["SEO", "Google Ads", "Social Media Marketing", "Content Marketing", "Email Marketing", "Lead Generation"],
    technologies: ["Google Ads", "Meta Ads", "GA4", "HubSpot", "Mailchimp", "Semrush"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    short: "Smart automation. Better business.",
    icon: "Bot",
    long: "Automate repetitive work, deploy AI agents and unlock new efficiency across your operations.",
    features: ["AI Chatbots", "WhatsApp Automation", "Workflow Automation", "Email Automation", "AI Voice Agents", "Lead Generation Automation"],
    technologies: ["OpenAI", "ChatGPT", "Python", "Zapier", "Make", "Twilio", "Dialogflow"],
  },
  {
    slug: "aws-cloud",
    title: "AWS Cloud Services",
    short: "Scalable, secure, reliable cloud infrastructure.",
    icon: "Cloud",
    long: "Architect, migrate and operate workloads on AWS with confidence — built for scale and cost-efficiency.",
    features: ["Cloud Migration", "EC2", "S3", "RDS", "Lambda", "CloudFront", "Route 53", "CloudWatch"],
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "CloudFormation"],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    short: "Protect your business. Protect your future.",
    icon: "ShieldCheck",
    long: "Advanced cybersecurity to safeguard your systems, data and customers from evolving threats.",
    features: ["Vulnerability Assessment", "Penetration Testing", "Network Security", "Endpoint Security", "Email Security", "Compliance"],
    technologies: ["Palo Alto", "Fortinet", "CrowdStrike", "Tenable", "Sophos", "Microsoft Defender"],
  },
  {
    slug: "it-support",
    title: "IT Support & Maintenance",
    short: "We support you, always.",
    icon: "Headphones",
    long: "Responsive 24/7 IT support, monitoring and maintenance so your business never stops.",
    features: ["Help Desk", "Monitoring", "Maintenance", "Backup", "Recovery", "Hardware Support"],
    technologies: ["Zendesk", "Freshdesk", "Datadog", "PRTG", "Veeam"],
  },
  {
    slug: "training-placement",
    title: "Training & Placement",
    short: "Learn. Grow. Get placed.",
    icon: "GraduationCap",
    long: "Industry-focused training with hands-on live projects, certifications and placement assistance.",
    features: ["Industry Training", "Live Projects", "Certifications", "Placement Assistance"],
    technologies: ["Full-stack", "Cloud", "DevOps", "Data", "Cyber"],
  },
];
