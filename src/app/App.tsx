import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Droplets,
  Star,
  Clock,
  Truck,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import coolDrinksDisplay from "../assets/cool_drinks_display.png";

const PHONE = "+918610314140";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello! I am interested in wholesale cool drinks and water supply from Arun Agencies. Please share more details."
);
const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${PHONE.replace("+", "")}&text=${WHATSAPP_MSG}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const popularFlavours = [
  { name: "Mango", color: "#FF8C00", desc: "Rich sweet Alphonso mango flavor" },
  { name: "Lemon", color: "#DFFF00", desc: "Zesty and refreshing citrus hit" },
  { name: "Orange", color: "#FFA500", desc: "Bright orange burst, tangy and sweet" },
  { name: "Apple", color: "#CD5C5C", desc: "Crisp red apple extract, sweet blend" },
  { name: "Grape", color: "#8A2BE2", desc: "Deep purple grape juice infusion" },
  { name: "Pineapple", color: "#FFD700", desc: "Golden tropical pineapple refresh" },
  { name: "Strawberry", color: "#DE3163", desc: "Delicate sweet strawberry punch" },
  { name: "Guava", color: "#FFC0CB", desc: "Mild, aromatic pink guava flavor" },
  { name: "Badam drink", color: "#FFE4C4", desc: "Almond milk beverage, rich and creamy" },
];

const carbonatedRange = [
  { name: "Plain Soda", color: "#A0C4DF", desc: "Crisp, hyper-carbonated sparkling water" },
  { name: "Flavoured Soda variants", color: "#CCE235", desc: "Paneer, ginger, lemon, and masala sodas" },
];

const coolDrinkSizes = [
  {
    size: "200 ml Bottles",
    packaging: "30 Bottles per Crate",
    desc: "Perfect for single-serve retail, local stalls, and quick refreshment.",
    icon: (
      <svg className="w-5 h-8 text-primary" viewBox="0 0 24 36" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2v4M8 6h8M6 10v20a4 4 0 004 4h4a4 4 0 004-4V10c0-2.5-2-4-2-4H8c0 0-2 1.5-2 4z" />
      </svg>
    ),
  },
  {
    size: "500 ml Bottles",
    packaging: "24 Bottles per Crate",
    desc: "Standard on-the-go size, popular for travel and individual dining.",
    icon: (
      <svg className="w-5 h-9 text-primary" viewBox="0 0 24 38" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2v5M8 7h8M6 12v21a3 3 0 003 3h6a3 3 0 003-3V12c0-3-2-5-2-5H8c0 0-2 2-2 5z" />
      </svg>
    ),
  },
  {
    size: "1 L PET Bottles",
    packaging: "12 Bottles per Crate",
    desc: "Ideal for family meals, small gatherings, and restaurant table service.",
    icon: (
      <svg className="w-5 h-10 text-primary" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2v5M7 7h10M5 14v21a3 3 0 003 3h8a3 3 0 003-3V14c0-4-3-7-3-7H8s-3 3-3 7z" />
      </svg>
    ),
  },
  {
    size: "2 L Bottles",
    packaging: "12 Bottles per Crate",
    desc: "Convenient large size for parties, group catering, and household sharing.",
    icon: (
      <svg className="w-5 h-11 text-primary" viewBox="0 0 24 42" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2v6M7 8h10M5 16v21a4 4 0 004 4h6a4 4 0 004-4V16c0-5-3-8-3-8H8s-3 3-3 8z" />
      </svg>
    ),
  },
  {
    size: "Wholesale Crates",
    packaging: "Assorted case packing",
    desc: "Bulk crates available for all flavours. Sturdy, reusable returnable crates.",
    icon: (
      <svg className="w-6 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="2" y="5" width="20" height="15" rx="2" />
        <path d="M2 10h20M2 15h20M7 5v15M12 5v15M17 5v15" />
      </svg>
    ),
  },
];


const waterSizes = [
  { size: "300 ml", desc: "On-the-go pocket bottle", icon: "💧" },
  { size: "500 ml", desc: "Standard daily carry", icon: "💧" },
  { size: "1 L", desc: "Family & office use", icon: "🫙" },
  { size: "2 L", desc: "Home & gathering size", icon: "🫙" },
  { size: "5 L", desc: "Bulk & event supply", icon: "🪣" },
];

const deliveryLocations = [
  "Thiruvarur",
  "Shollanganallur",
  "Puthur",
  "Kizhvelur",
  "Nagapattinam",
  "Nagore",
];

const whyChoose = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: "25+ Years of Trust",
    desc: "Serving Thiruvarur since 1999 — a name every local retailer knows and relies on.",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Timely Delivery",
    desc: "We understand your business depends on punctual supply. We never let you run out of stock.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Genuine Wholesale Pricing",
    desc: "Best market rates for bulk orders. Transparent pricing with no hidden charges.",
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Bulk & Event Orders",
    desc: "Special supply arrangements for weddings, functions, and large-scale events on request.",
  },
];

const customers = [
  "Small Shop Owners & Retailers",
  "Marriage & Function Organizers",
  "Event & Party Planners",
  "Hotels & Restaurants",
  "Local Wholesale Buyers",
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ─── Navbar ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Droplets className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div
                className="text-lg font-semibold leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: scrolled ? "#1A5276" : "#1A5276",
                }}
              >
                Arun Agencies
              </div>
              <div className="text-[11px] text-muted-foreground tracking-wide uppercase">
                Est. 1999 · Thiruvarur
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${PHONE}`}
            className="hidden md:flex items-center gap-2 bg-accent text-accent-foreground text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border px-5 pb-5">
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base py-2.5 font-medium text-foreground/80 hover:text-primary border-b border-border/50 last:border-0"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-3 mt-4">
              <a
                href={`tel:${PHONE}`}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold py-3 rounded-full"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-3 rounded-full"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D3B5C] via-[#1A5276] to-[#0A2540]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #D4622A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4FB3D9 0%, transparent 50%)",
          }}
        />
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 py-32 md:py-40 grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              Trusted Since 1999 · Thiruvarur
            </div>

           <h1
              className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
                           Arun <span className="text-[#4FB3D9]">Agencies</span>

            </h1>

            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-3 max-w-lg">
              Wholesale Cool Drinks & Packaged Water Supply
            </p>
            <p className="text-white/55 text-base leading-relaxed mb-10 max-w-lg">
              Supplying cool drinks, sodas, juices, and packaged drinking water to
              retailers, shop owners, and events across Thiruvarur for over 25 years.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-all shadow-lg shadow-accent/30"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-all shadow-lg shadow-green-500/25"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/15">
              {[
                { n: "25+", label: "Years in Business" },
                { n: "1500+", label: "Customers Served" },
                { n: "15+", label: "Product Variants" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.n}
                  </div>
                  <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-80 h-96">
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-lg animate-float-subtle">
                <img
                  src={coolDrinksDisplay}
                  alt="Premium unbranded cool drink bottles of various colors in ice"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B5C]/40 to-transparent" />
              </div>
              {/* Float card */}
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl px-5 py-4 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Same-Day Delivery</div>
                    <div className="text-xs text-muted-foreground">Thiruvarur & surroundings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* ─── Announcement Strip ─── */}
      <div className="bg-accent text-accent-foreground py-3">
        <div className="max-w-6xl mx-auto px-5 flex flex-wrap justify-center gap-x-10 gap-y-1 text-sm font-medium text-center">
          <span>📦 Bulk orders for weddings & events — call for special rates</span>
          <span>🚚 Quick delivery across Thiruvarur district</span>
          <span>🏪 Walk-in wholesale available</span>
        </div>
      </div>

      {/* ─── About ─── */}
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden h-80 md:h-[440px] bg-secondary shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop"
                alt="Wholesale beverage warehouse stock ready for distribution"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent card */}
            <div className="absolute top-6 -right-5 md:-right-8 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-lg">
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                1999
              </div>
              <div className="text-primary-foreground/70 text-xs mt-1 leading-tight">
                Year of<br />Establishment
              </div>
            </div>
          </div>

          <div>
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Our Story
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Business Built on Trust by Customers
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-5">
              Arun Agencies has been a cornerstone of the Thiruvarur wholesale cool drinks and
              water supply market since 1999. A business built on the trust of customers, we
              have grown into one of the most reliable wholesale agencies in the region — thanks
              to consistent quality, honest pricing, and a personal touch that larger
              distributors simply cannot offer.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              We supply cool drinks, sodas, juices, and packaged drinking water to over 1000
              shop owners, retailers, and bulk buyers throughout Thiruvarur, Nagapattinam, and
              surrounding areas. Whether it is your daily stock requirement or a special bulk
              order for a function or wedding, we have you covered.
            </p>
            <ul className="space-y-3">
              {[
                "A business built on the trust of customers since 1999",
                "25+ years of uninterrupted supply across the region",
                "Competitive wholesale pricing for all quantities",
                "Serving 1000+ satisfied customers across Thiruvarur district",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Products ─── */}
      <section id="products" className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              What We Supply
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Product Range
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              All products are sourced from reliable manufacturers and supplied fresh at
              competitive wholesale rates.
            </p>
          </div>

          {/* ── Cool Drinks ── */}
          <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm mb-8">
            <div className="bg-gradient-to-r from-[#1A5276] to-[#2E86C1] px-8 py-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Cool Drinks Wholesale
                </h3>
                <p className="text-white/65 text-sm mt-0.5">
                  Assorted fruit-flavoured drinks, regional specialities, and premium carbonated soda range
                </p>
              </div>
            </div>

            <div className="p-8 grid md:grid-cols-12 gap-8 items-start">
              {/* Product catalog & categories */}
              <div className="md:col-span-7 space-y-8">
                {/* Categorized Flavours */}
                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                    Flavour Directory
                  </h4>
                  
                  <div className="space-y-6">
                    {/* Popular Flavours */}
                    <div className="bg-secondary/50 rounded-xl p-5 border border-border/50">
                      <h5 className="font-semibold text-[#1A5276] text-sm mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        Popular Flavours
                      </h5>
                      <p className="text-[11px] text-muted-foreground mb-4">
                        High-demand fruit juices and traditional regional specialities
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {popularFlavours.map((item) => (
                          <div
                            key={item.name}
                            className="flex items-center gap-3 bg-card rounded-lg px-3.5 py-2.5 border border-border/40 hover:border-primary/20 transition-colors shadow-xs"
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full flex-shrink-0 shadow-xs border border-black/5"
                              style={{ backgroundColor: item.color }}
                            />
                            <div>
                              <div className="text-sm font-semibold text-foreground leading-none">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-muted-foreground mt-1">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Carbonated Range */}
                    <div className="bg-secondary/50 rounded-xl p-5 border border-border/50">
                      <h5 className="font-semibold text-[#1A5276] text-sm mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Carbonated Range
                      </h5>
                      <p className="text-[11px] text-muted-foreground mb-4">
                        Premium plain sodas and fizzy mixers for restaurants and retailers
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {carbonatedRange.map((item) => (
                          <div
                            key={item.name}
                            className="flex items-center gap-3 bg-card rounded-lg px-3.5 py-2.5 border border-border/40 hover:border-primary/20 transition-colors shadow-xs"
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full flex-shrink-0 shadow-xs border border-black/5"
                              style={{ backgroundColor: item.color }}
                            />
                            <div>
                              <div className="text-sm font-semibold text-foreground leading-none">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-muted-foreground mt-1">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sizes presentation */}
                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                    Available Packaging & Bottle Sizes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {coolDrinkSizes.map((s) => (
                      <div
                        key={s.size}
                        className="bg-card border border-border/60 hover:border-primary/30 rounded-xl p-4 transition-all flex gap-3.5 shadow-xs"
                      >
                        <div className="text-primary flex-shrink-0 mt-0.5">
                          {s.icon}
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-foreground leading-tight">
                            {s.size}
                          </h5>
                          <p className="text-[10px] font-semibold text-accent mt-0.5">
                            {s.packaging}
                          </p>
                          <p className="text-[11px] text-muted-foreground mt-1.5 leading-normal">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual section */}
              <div className="md:col-span-5 flex flex-col items-center justify-center h-full sticky top-24 pt-4">
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-border/40 shadow-lg bg-gradient-to-b from-[#EEF4F8] to-white p-2.5 animate-float-subtle">
                  <img
                    src={coolDrinksDisplay}
                    alt="Unbranded premium cool drink bottles in colorful fruit variants resting in clean crushed ice"
                    className="w-full rounded-xl object-cover aspect-[4/3] md:aspect-[5/6] shadow-inner"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none rounded-2xl" />
                </div>
                <div className="text-center mt-4 px-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Premium Quality Wholesale Supply
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1 max-w-xs">
                    Clean, unbranded bottles ready for custom white-label branding or local retail distribution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Packaged Water ── */}
          <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="bg-gradient-to-r from-[#4FB3D9] to-[#1A7A9E] px-8 py-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Packaged Drinking Water
                </h3>
                <p className="text-white/65 text-sm mt-0.5">
                  ISI certified · All sizes · Bulk & retail supply
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Size cards */}
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-4">Available Sizes</p>
                  <div className="space-y-3">
                    {waterSizes.map((w) => (
                      <div
                        key={w.size}
                        className="flex items-center justify-between bg-secondary rounded-xl px-5 py-3.5 hover:bg-[#4FB3D9]/8 hover:border-[#4FB3D9]/20 border border-transparent transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{w.icon}</span>
                          <span className="text-sm font-bold text-foreground">{w.size}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{w.desc}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs mt-4 leading-relaxed">
                    Available for daily retail restocking and bulk event orders. Call for
                    carton-level wholesale pricing.
                  </p>
                </div>
                {/* Water image */}
                <div className="rounded-xl overflow-hidden h-64 md:h-full min-h-[220px] bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1536939459926-301728717817?w=600&h=480&fit=crop&auto=format"
                    alt="Rows of clear generic packaged drinking water bottles with no brand markings"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order CTA */}
          <div className="mt-8 bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="font-semibold text-foreground text-lg">
                Need a bulk or event order?
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                We offer special arrangements for weddings, functions, and large gatherings.
                Call us for a custom quote.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                Call for Quote
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section id="why" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Our Strengths
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Businesses Choose Arun Agencies
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Over two decades of consistent supply and customer satisfaction — here is what
              sets us apart.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {whyChoose.map((w) => (
              <div
                key={w.title}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                  {w.icon}
                </div>
                <h3
                  className="text-foreground font-semibold text-base mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {w.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Customers row */}
          <div className="bg-primary rounded-2xl p-8 text-center mb-6">
            <h3
              className="text-primary-foreground text-xl font-semibold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Who We Serve
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {customers.map((c) => (
                <span
                  key={c}
                  className="bg-white/10 border border-white/15 text-primary-foreground/85 text-sm font-medium px-5 py-2 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Delivery locations */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-3 mb-1">
                  <Truck className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-foreground uppercase tracking-widest">Delivery Coverage</span>
                </div>
                <p className="text-muted-foreground text-xs mt-1">We supply across these locations</p>
              </div>
              <div className="flex flex-wrap gap-2 md:ml-4">
                {deliveryLocations.map((loc) => (
                  <span
                    key={loc}
                    className="flex items-center gap-1.5 bg-secondary border border-border text-foreground text-sm font-medium px-4 py-2 rounded-full"
                  >
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Google Map ─── */}
      <section id="location" className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Find Us
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Location
            </h2>
            <p className="text-muted-foreground mt-3">
              No: 31, Thanjai Salai, Thiruvarur – 610001
              <span className="block text-sm mt-1 text-accent font-medium">Next to Wahab Metro Mart</span>
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-80 md:h-[420px] bg-card">
            <iframe
              title="Arun Agencies Location — Thiruvarur"
              src="https://maps.google.com/maps?q=Arun%20agro%20%20Thanjai%20Salai,%20Thiruvarur&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.google.com/?q=Wahab+Metro+Mart,+Thanjai+Salai,+Thiruvarur"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Get in Touch
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Arun Agencies
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              For orders, wholesale enquiries, or any questions — reach us directly by phone,
              WhatsApp, or email. We typically respond within the same business day.
            </p>

            <div className="space-y-5">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Phone / WhatsApp</div>
                  <div className="text-foreground font-semibold text-base">+91 99947 44748</div>
                </div>
              </a>

              <a
                href="mailto:arunagencies@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Email</div>
                  <div className="text-foreground font-semibold text-base">arunagencies@gmail.com</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Address</div>
                  <div className="text-foreground text-sm leading-relaxed">
                    No: 31, Thanjai Salai,<br />
                    Next to Wahab Metro Mart,<br />
                    Thiruvarur – 610001, Tamil Nadu
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <a
                href={`tel:${PHONE}`}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h3
              className="text-xl font-semibold text-foreground mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Send an Enquiry
            </h3>
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-[#0D2235] text-white">
        <div className="max-w-6xl mx-auto px-5 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <div
                className="text-base font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Arun Agencies
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Wholesale cool drinks and packaged water supplier. Serving Thiruvarur with trust
              and reliability since 1999.
            </p>
          </div>

          <div>
            <h4 className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                ["About Us", "#about"],
                ["Products", "#products"],
                ["Why Choose Us", "#why"],
                ["Our Location", "#location"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-4">
              Contact Info
            </h4>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                <span className="text-white/55 text-sm leading-relaxed">
                  No: 31, Thanjai Salai,<br />
                  Next to Wahab Metro Mart,<br />
                  Thiruvarur – 610001
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/40 flex-shrink-0" />
                <a href={`tel:${PHONE}`} className="text-white/55 text-sm hover:text-white transition-colors">
                  +91 99947 44748
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
                <a href="mailto:arunagencies@gmail.com" className="text-white/55 text-sm hover:text-white transition-colors">
                  arunagencies@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/8 py-5">
          <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-3 text-white/35 text-xs">
            <span>© {new Date().getFullYear()} Arun Agencies, Thiruvarur. All rights reserved.</span>
            <span>Established 1999 · Cool Drinks & Water Wholesale Supplier</span>
          </div>
        </div>
      </footer>

      {/* ─── Floating WhatsApp ─── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform duration-200"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}

/* ── Simple enquiry form (no backend) ── */
function EnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", product: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Arun Agencies!\n\nName: ${form.name}\nPhone: ${form.phone}\nProduct Interest: ${form.product}\nMessage: ${form.message}`
    );
    window.open(`https://api.whatsapp.com/send?phone=918610314140&text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const inputCls =
    "w-full bg-input-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all";

  return sent ? (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <h4 className="text-foreground font-semibold text-lg mb-2">Enquiry Sent!</h4>
      <p className="text-muted-foreground text-sm">
        Your message was opened in WhatsApp. We will get back to you shortly.
      </p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">
          Your Name *
        </label>
        <input
          required
          className={inputCls}
          placeholder="e.g. Murugan Store"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div>
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">
          Phone Number *
        </label>
        <input
          required
          type="tel"
          className={inputCls}
          placeholder="+91 98xxx xxxxx"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>
      <div>
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">
          Product Interest
        </label>
        <select
          className={inputCls}
          value={form.product}
          onChange={(e) => setForm({ ...form, product: e.target.value })}
        >
          <option value="">Select a product...</option>
          <option>Cool Drinks (Assorted Flavours)</option>
          <option>Packaged Water — 300 ml</option>
          <option>Packaged Water — 500 ml</option>
          <option>Packaged Water — 1 L</option>
          <option>Packaged Water — 2 L</option>
          <option>Packaged Water — 5 L</option>
          <option>Bulk / Event Order (Mixed)</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">
          Message
        </label>
        <textarea
          rows={3}
          className={`${inputCls} resize-none`}
          placeholder="Tell us your quantity, delivery location, or any special requirements..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity text-sm"
      >
        <WhatsAppIcon className="w-4 h-4" />
        Send via WhatsApp
      </button>
      <p className="text-center text-muted-foreground text-xs">
        Tapping submit opens WhatsApp with your enquiry pre-filled.
      </p>
    </form>
  );
}
