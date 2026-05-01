import { Button } from "@/components/ui/button";
import { StockScreen, BinsScreen, AlertsScreen } from "@/components/PhoneScreens";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  Package,
  ScanBarcode,
  Bell,
  BarChart3,
  Boxes,
  ShieldCheck,
  Check,
  Star,
  Pill,
  Smartphone,
  Clock,
  Users,
  Apple,
  Play,
  Menu,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how", label: "How it works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Reviews" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center hover:bg-muted transition-smooth"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Pill className="w-4 h-4 text-primary-foreground" />
                  </div>
                  Pharmako
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1 px-2">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="px-3 py-3 rounded-lg text-sm font-medium hover:bg-muted transition-smooth"
                  >
                    {l.label}
                  </a>
                ))}
                <Button className="mt-6 bg-gradient-primary hover:opacity-90 transition-smooth shadow-soft">
                  Get the app
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
              <Pill className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg tracking-tight">Parmako</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-smooth">
              {l.label}
            </a>
          ))}
        </nav>
        <Button className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-soft">
          Get the app
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-hero">
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-[28rem] md:h-[36rem] pointer-events-none"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waveGrad1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.85 0.12 220)" stopOpacity="0.55" />
            <stop offset="60%" stopColor="oklch(0.6 0.2 240)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="oklch(0.4 0.2 255)" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.7 0.18 230)" stopOpacity="0.6" />
            <stop offset="60%" stopColor="oklch(0.5 0.2 250)" stopOpacity="0.75" />
            <stop offset="100%" stopColor="oklch(0.32 0.18 260)" stopOpacity="0.8" />
          </linearGradient>
          <filter id="waveSoftBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <path
          fill="url(#waveGrad1)"
          opacity="0.85"
          filter="url(#waveSoftBlur)"
          d="M0,250 C240,400 480,80 720,220 C960,360 1200,500 1440,260 L1440,600 L0,600 Z"
        >
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
              M0,250 C240,400 480,80 720,220 C960,360 1200,500 1440,260 L1440,600 L0,600 Z;
              M0,320 C240,150 480,420 720,280 C960,140 1200,360 1440,200 L1440,600 L0,600 Z;
              M0,250 C240,400 480,80 720,220 C960,360 1200,500 1440,260 L1440,600 L0,600 Z"
          />
        </path>
        <path
          fill="url(#waveGrad2)"
          filter="url(#waveSoftBlur)"
          d="M0,400 C320,250 640,520 960,360 C1180,260 1320,420 1440,360 L1440,600 L0,600 Z"
        >
          <animate
            attributeName="d"
            dur="13s"
            repeatCount="indefinite"
            values="
              M0,400 C320,250 640,520 960,360 C1180,260 1320,420 1440,360 L1440,600 L0,600 Z;
              M0,360 C320,500 640,260 960,440 C1180,520 1320,320 1440,420 L1440,600 L0,600 Z;
              M0,400 C320,250 640,520 960,360 C1180,260 1320,420 1440,360 L1440,600 L0,600 Z"
          />
        </path>
      </svg>
      <div className="relative w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/70 backdrop-blur border border-border text-xs font-medium text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            New · Built for modern pharmacies
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Pharmacy stock,
            <br />
            <span className="text-gradient">simplified.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            Parmako helps pharmacies track inventory, organize bins, and prevent expirations —
            straight from your phone. Faster counts, fewer losses, healthier shelves.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="#"
              className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-foreground text-background hover:opacity-90 transition-smooth shadow-soft"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-80">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-foreground text-background hover:opacity-90 transition-smooth shadow-soft"
            >
              <Play className="w-6 h-6 fill-background" />
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-80">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
          <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground lg:text-white/90 justify-center lg:justify-start">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-primary text-primary lg:fill-white lg:text-white"
                />
              ))}
              <span className="ml-2 font-medium text-foreground lg:text-white">4.9</span>
            </div>
            <div className="lg:text-white/90">Trusted by 500+ pharmacies</div>
          </div>
        </div>
        <div className="relative h-[640px]">
          <div className="phone-stack-item">
            <StockScreen />
          </div>
          <div className="phone-stack-item">
            <BinsScreen />
          </div>
          <div className="phone-stack-item">
            <AlertsScreen />
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: ScanBarcode,
    title: "Barcode scanning",
    desc: "Scan medicines instantly with your phone camera. No extra hardware required.",
  },
  {
    icon: Boxes,
    title: "Smart bin management",
    desc: "Assign locations, organize shelves, and find anything in seconds.",
  },
  {
    icon: Bell,
    title: "Expiry alerts",
    desc: "Get notified before stock expires. Never lose money to dead inventory again.",
  },
  {
    icon: BarChart3,
    title: "Real-time analytics",
    desc: "Visualize stock movement, top sellers, and reorder needs at a glance.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-ready logs",
    desc: "Every change tracked. Stay compliant with full traceability.",
  },
  {
    icon: Package,
    title: "Reorder automation",
    desc: "Auto-flag low stock and generate purchase lists in one tap.",
  },
];

function Features() {
  return (
    <section id="features" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything your pharmacy needs</h2>
          <p className="text-muted-foreground text-lg">
            Built with pharmacists, for pharmacists. Parmako replaces spreadsheets and paper logs
            with one beautifully simple app.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-5 md:p-8 rounded-2xl bg-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 md:mb-5 shadow-soft group-hover:scale-110 transition-smooth">
                <f.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-base md:text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: Smartphone,
    title: "Download Parmako",
    desc: "Install on iOS or Android in under a minute.",
  },
  {
    icon: ScanBarcode,
    title: "Scan your stock",
    desc: "Bulk-scan medicines and assign them to bins.",
  },
  { icon: Clock, title: "Stay ahead", desc: "Get alerts, insights, and reports — all automated." },
];

function HowItWorks() {
  return (
    <section id="how" className="min-h-screen flex items-center py-20 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Up and running in minutes</h2>
          <p className="text-muted-foreground text-lg">
            No training. No setup fees. Just open the app.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative p-8 rounded-2xl bg-card border border-border shadow-soft"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-deep text-primary-foreground flex items-center justify-center font-bold text-sm shadow-elegant">
                {i + 1}
              </div>
              <s.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Dr. Sara Ahmed",
    role: "Pharmacy Owner, Cairo",
    text: "Parmako cut our monthly stocktake from 2 days to 3 hours. The expiry alerts alone saved us thousands.",
  },
  {
    name: "Khaled Mansour",
    role: "Chief Pharmacist",
    text: "Finally, an app that understands how a pharmacy actually works. The bin system is genius.",
  },
  {
    name: "Lina Othman",
    role: "Operations Manager",
    text: "Clean, fast, and reliable. My team picked it up in one afternoon and never looked back.",
  },
];

const allTestimonials = [
  ...testimonials,
  {
    name: "Yonas Tesfaye",
    role: "Pharmacist, Addis Ababa",
    text: "Inventory accuracy jumped to 99%. Parmako paid for itself in the first month.",
  },
  {
    name: "Mariam Hassan",
    role: "Branch Manager",
    text: "The reorder automation is a lifesaver during busy seasons. Highly recommend.",
  },
  {
    name: "Ahmed Bekele",
    role: "Pharmacy Owner",
    text: "Customer support is fantastic. They actually listen and ship improvements fast.",
  },
  {
    name: "Hanna Girma",
    role: "Lead Pharmacist",
    text: "Switched from spreadsheets and never looked back. Our team loves the bin system.",
  },
  {
    name: "Samuel Wolde",
    role: "Operations Lead",
    text: "Multi-branch sync works flawlessly. We finally have one source of truth.",
  },
  {
    name: "Rahel Abebe",
    role: "Owner, 3 branches",
    text: "Expiry alerts caught batches we would have written off. Real money saved.",
  },
];

const supportedBy = ["MediCorp", "PharmaPlus", "HealthLink", "BioCare", "RxNetwork", "VitaGroup"];

function TestimonialCard({ t }: { t: { name: string; role: string; text: string } }) {
  return (
    <div className="w-[360px] shrink-0 p-6 rounded-2xl bg-card border border-border shadow-soft">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground/90 leading-relaxed mb-5 text-sm">"{t.text}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-xs">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <div className="font-semibold text-sm">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: typeof allTestimonials;
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`marquee ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const row1 = allTestimonials.slice(0, 3);
  const row2 = allTestimonials.slice(3, 6);
  const row3 = allTestimonials.slice(6, 9);
  return (
    <section id="testimonials" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by modern pharmacies</h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of teams already running smarter shelves.
          </p>
        </div>
        <div className="space-y-6">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
          <MarqueeRow items={row3} direction="left" />
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Supported by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
            {supportedBy.map((name) => (
              <div key={name} className="flex items-center gap-2 text-foreground/70">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary/80 flex items-center justify-center">
                  <Pill className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg tracking-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Basic",
    price: "4,000",
    tag: "For small pharmacies",
    features: [
      "Up to 500 SKUs",
      "Barcode scanning",
      "Basic bin management",
      "Expiry alerts",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "7,000",
    tag: "Most popular",
    features: [
      "Up to 5,000 SKUs",
      "Advanced bin system",
      "Real-time analytics",
      "Reorder automation",
      "Multi-user access (5)",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "10,000",
    tag: "For chains & enterprises",
    features: [
      "Unlimited SKUs",
      "Multi-branch support",
      "Audit logs & compliance",
      "API access",
      "Unlimited users",
      "Dedicated account manager",
      "24/7 support",
    ],
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="min-h-screen flex items-center py-20 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground text-lg">
            Start free for 14 days. No credit card required.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-8 rounded-2xl border transition-smooth ${
                p.highlight
                  ? "bg-gradient-deep text-primary-foreground border-transparent shadow-elegant scale-105"
                  : "bg-card border-border hover:shadow-soft"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {p.tag}
                </div>
              )}
              <div
                className={`text-sm mb-2 ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {p.highlight ? "Standard plan" : p.tag}
              </div>
              <h3 className="text-2xl font-bold mb-4">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold">{p.price}</span>
                <span
                  className={`text-sm font-semibold ${p.highlight ? "text-primary-foreground/80" : "text-primary"}`}
                >
                  ETB
                </span>
                <span
                  className={p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}
                >
                  /mo
                </span>
              </div>
              <Button
                className={`w-full mb-6 transition-smooth ${
                  p.highlight
                    ? "bg-primary-foreground text-primary-deep hover:bg-primary-foreground/90"
                    : "bg-gradient-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Start free trial
              </Button>
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.highlight ? "text-primary-foreground" : "text-primary"}`}
                    />
                    <span
                      className={p.highlight ? "text-primary-foreground/90" : "text-foreground/80"}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-5xl w-full mx-auto rounded-3xl bg-gradient-deep p-12 md:p-16 text-center shadow-elegant relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.65_0.18_235/0.4),transparent_60%)]" />
        <div className="relative">
          <Users className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready to modernize your pharmacy?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ pharmacies already saving hours every week with Parmako.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-primary-foreground text-primary-deep hover:opacity-90 transition-smooth"
            >
              <Apple className="w-7 h-7" />
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-70">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-primary-foreground text-primary-deep hover:opacity-90 transition-smooth"
            >
              <Play className="w-7 h-7 fill-primary-deep" />
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-70">GET IT ON</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
                <Pill className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg tracking-tight">Parmako</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-sm">
              Parmako is the modern pharmacy management platform built to help pharmacies of every
              size track inventory, prevent expirations, and grow with confidence. Trusted by 500+
              pharmacies across Africa and the Middle East.
            </p>
            <p className="text-xs text-muted-foreground">
              Made with care for pharmacists. Compliant, secure, and always improving.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground transition-smooth">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground transition-smooth">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#how" className="hover:text-foreground transition-smooth">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  API docs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Parmako. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-smooth">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-smooth">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-smooth">
              Cookies
            </a>
            <a href="#" className="hover:text-foreground transition-smooth">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
