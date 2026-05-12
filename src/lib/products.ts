// Shared product catalog data
export type Product = {
  id: string;
  name: string;
  price: string;
  category: "panel" | "boost" | "web" | "digital";
  badge?: "Best Seller" | "New" | "Hot" | "Limited";
  desc: string;
  spec?: string[];
};

export const products: Product[] = [
  // Panel Pterodactyl
  { id: "p1", name: "Panel RAM 1GB | CPU 40%", price: "Rp2.000", category: "panel", desc: "Panel public Pterodactyl untuk kebutuhan ringan.", badge: "Best Seller", spec: ["Uptime 99%", "Anti delay", "Anti colong script"] },
  { id: "p2", name: "Panel RAM 2GB | CPU 60%", price: "Rp3.000", category: "panel", desc: "Cocok untuk bot WhatsApp & ringan.", spec: ["Uptime 99%", "Anti delay"] },
  { id: "p3", name: "Panel RAM 3GB | CPU 80%", price: "Rp4.000", category: "panel", desc: "Bot multi-device tanpa lag.", spec: ["Uptime 99%", "Stable"] },
  { id: "p4", name: "Panel RAM 4GB | CPU 100%", price: "Rp5.000", category: "panel", desc: "Panel solid untuk produksi.", badge: "Hot", spec: ["Uptime 99.9%", "Fast SSD"] },
  { id: "p5", name: "Panel RAM 5GB | CPU 120%", price: "Rp6.000", category: "panel", desc: "Stabil untuk bot besar & multi-instance.", spec: ["Premium node"] },
  { id: "p6", name: "Panel UNLIMITED", price: "Rp10.000", category: "panel", desc: "Tanpa batas RAM & CPU. Worth it.", badge: "Limited", spec: ["Unlimited RAM", "Unlimited CPU", "Priority support"] },

  // Boost
  { id: "b1", name: "Instagram Followers", price: "mulai Rp1.500/100", category: "boost", desc: "Real/no bot, fast process, garansi refill 30 hari.", badge: "Best Seller" },
  { id: "b2", name: "Instagram Likes", price: "mulai Rp1.000/100", category: "boost", desc: "Instant process, akun aman.", badge: "Hot" },
  { id: "b3", name: "Instagram Views", price: "mulai Rp1.000/1000", category: "boost", desc: "Naikkan reach & impression video reels." },
  { id: "b4", name: "TikTok Followers", price: "mulai Rp2.000/100", category: "boost", desc: "Followers stabil, no drop." },
  { id: "b5", name: "TikTok Likes", price: "mulai Rp1.000/100", category: "boost", desc: "Tingkatkan engagement TikTok kamu." },
  { id: "b6", name: "TikTok Views", price: "mulai Rp1.000/1000", category: "boost", desc: "FYP boost, trafik tinggi." },
  { id: "b7", name: "WhatsApp Channel Viewer", price: "mulai Rp1.500/100", category: "boost", desc: "Boost viewer WA Channel." },
  { id: "b8", name: "YouTube Viewer", price: "mulai Rp5.000/1000", category: "boost", desc: "Real viewer dengan retensi." },
  { id: "b9", name: "Telegram Member", price: "mulai Rp3.000/100", category: "boost", desc: "Member channel/grup Telegram.", badge: "New" },

  // Web / programming
  { id: "w1", name: "Landing Page Modern", price: "mulai Rp75.000", category: "web", desc: "Landing page satu halaman responsive & cepat.", badge: "New" },
  { id: "w2", name: "Company Profile Website", price: "mulai Rp150.000", category: "web", desc: "Multipage company profile premium." },
  { id: "w3", name: "Portfolio Website", price: "mulai Rp100.000", category: "web", desc: "Showcase project kamu dengan style aesthetic." },
  { id: "w4", name: "UI Redesign", price: "Custom", category: "web", desc: "Refresh tampilan website / app jadi modern." },
  { id: "w5", name: "Frontend Modern (React/Next)", price: "Custom", category: "web", desc: "Build frontend pakai stack modern." },
  { id: "w6", name: "Bug Fixing", price: "mulai Rp25.000", category: "web", desc: "Fix bug code kamu cepat." },
  { id: "w7", name: "API Integration", price: "Custom", category: "web", desc: "Integrasi REST/GraphQL/3rd party API." },
  { id: "w8", name: "Dashboard Admin", price: "mulai Rp250.000", category: "web", desc: "Admin panel custom untuk bisnis kamu." },

  // Digital
  { id: "d1", name: "Jasa MC Online", price: "Custom", category: "digital", desc: "MC profesional untuk event online." },
  { id: "d2", name: "Rekber Terpercaya", price: "Fee 2%", category: "digital", desc: "Rekening bersama untuk transaksi aman." },
  { id: "d3", name: "Jasa Promosi / Post", price: "mulai Rp10.000", category: "digital", desc: "Promo produk kamu di jaringan kami." },
  { id: "d4", name: "Amankan Akun BloodStrike", price: "mulai Rp15.000", category: "digital", desc: "Pengamanan akun game BloodStrike." },
  { id: "d5", name: "Jailbreak Text", price: "Custom", category: "digital", desc: "Layanan custom prompt jailbreak." },
  { id: "d6", name: "Edit Config", price: "mulai Rp5.000", category: "digital", desc: "Edit config game/aplikasi kamu." },
];

export const categories = [
  { value: "all", label: "Semua" },
  { value: "panel", label: "Panel Pterodactyl" },
  { value: "boost", label: "Boost Sosmed" },
  { value: "web", label: "Web & Programming" },
  { value: "digital", label: "Layanan Digital" },
] as const;
