import { SITE } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi NEXZWARE, I'd like to discuss a project.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid place-items-center size-14 rounded-full text-white animate-pulse-ring"
      style={{ background: "#25D366", boxShadow: "0 10px 30px -5px rgba(37,211,102,0.6)" }}
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor">
        <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.46 1.71 6.39L3.2 28.8l6.6-1.71a12.7 12.7 0 0 0 6.2 1.6c7.07 0 12.8-5.73 12.8-12.8S23.07 3.2 16 3.2zm7.5 18.32c-.32.9-1.86 1.72-2.58 1.78-.66.06-1.5.09-2.42-.15-.56-.15-1.28-.39-2.21-.79-3.89-1.68-6.43-5.6-6.62-5.86-.19-.26-1.58-2.1-1.58-4.01s1-2.84 1.36-3.23c.35-.39.77-.48 1.03-.48s.51 0 .74.01c.24 0 .56-.09.87.66.32.78 1.1 2.69 1.2 2.89.1.2.16.42.03.68-.13.26-.19.42-.39.65-.19.23-.41.51-.58.68-.19.19-.39.4-.17.78.22.39 1 1.66 2.15 2.69 1.48 1.32 2.73 1.73 3.12 1.92.39.19.62.16.85-.1.23-.26.97-1.14 1.23-1.53.26-.39.52-.32.87-.19.35.13 2.23 1.05 2.61 1.24.39.19.65.29.74.45.1.16.1.93-.21 1.82z"/>
      </svg>
    </a>
  );
}
