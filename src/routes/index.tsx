import { createFileRoute } from "@tanstack/react-router";
import {
  Apple,
  Leaf,
  ShieldCheck,
  Zap,
  Lock,
  CheckCircle2,
  Heart,
  Star,
  ChevronDown,
} from "lucide-react";
const appIconUrl = "/app-icon.png";
const shot1Url = "/shot1.png";
const shot2Url = "/shot2.png";
const shot3Url = "/shot3.png";
const step1MenuUrl = "/step1-menu.png";
const step2OpenBrowserUrl = "/step2-open-browser.png";
const step3ButtonUrl = "/step3-button.png";

const title = "Naqi AI — Know What's Halal. For Sure.";
const description =
  "Naqi AI instantly checks if a product is halal, shows what's inside, and tracks your calories. Scan any barcode and decide with confidence.";

const appStoreUrl =
  "https://apps.apple.com/us/app/naqi-ai-halal-food-scanner/id6791649745";
const privacyUrl =
  "https://honeysuckle-marmot-129.notion.site/Naqi-Ai-Privacy-policy-3a51f3cc9c3c8062a6f9e6c951e86ef1?pvs=74";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Why Naqi", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const strip = [
  { icon: ShieldCheck, title: "100% Halal Focused", body: "Built for peace of mind" },
  { icon: Zap, title: "Instant Results", body: "Scan. Know. Decide." },
  { icon: Leaf, title: "Trusted Ingredients", body: "No more guesswork" },
  { icon: Lock, title: "Private & Secure", body: "Your data stays yours" },
];

const why = [
  {
    icon: CheckCircle2,
    title: "Halal Check",
    body: "Instantly know if a product is halal or not.",
  },
  {
    icon: Leaf,
    title: "Full Transparency",
    body: "See ingredients, nutrition, and additives.",
  },
  {
    icon: Heart,
    title: "Better Choices",
    body: "Eat with confidence. Live with purpose.",
  },
];

const steps = [
  {
    number: "01",
    title: "Scan any barcode",
    body: "Point your camera at the product. Naqi reads the barcode in a second.",
    image: shot1Url,
  },
  {
    number: "02",
    title: "Track calories with ease",
    body: "Every scan logs calories, protein, carbs and fats to your daily goal.",
    image: shot2Url,
  },
  {
    number: "03",
    title: "See insights, stay on track",
    body: "Weekly summaries show exactly how your habits are trending.",
    image: shot3Url,
  },
];

const reviews = [
  {
    quote:
      "Finally an app that tells me straight away whether something is halal. I use it every grocery run.",
    name: "Yusuf A.",
  },
  {
    quote:
      "The nutrition tracking is a bonus I didn't expect. Scanning is fast and the results are clear.",
    name: "Amina K.",
  },
  {
    quote:
      "No more reading tiny ingredient lists in the aisle. Naqi does it for me in seconds.",
    name: "Bilal R.",
  },
];

const faqs = [
  {
    q: "How does Naqi AI decide if a product is halal?",
    a: "Naqi reads the product's listed ingredients and flags anything haram or doubtful, then explains the reasoning. It's automated guidance — always verify independently for critical cases.",
  },
  {
    q: "Does it work on products without a barcode?",
    a: "Yes. You can search by name or snap the ingredients label and Naqi will analyse the text.",
  },
  {
    q: "Can I track calories too?",
    a: "Every scan can be logged to your daily goal with calories, protein, carbs and fats, plus weekly insights.",
  },
  {
    q: "Is my data private?",
    a: "Your scans stay tied to your account and are never sold. See the privacy policy for full details.",
  },
];

const fallbackSteps = [
  {
    number: "1",
    title: "Tap the ••• menu",
    body: "Top-right corner of the in-app browser.",
    image: step1MenuUrl,
    alt: "Screenshot highlighting the three-dot menu in a mobile in-app browser",
  },
  {
    number: "2",
    title: "Tap “Open in Browser”",
    body: "Choose Safari, Chrome or “Open in external browser”.",
    image: step2OpenBrowserUrl,
    alt: "Screenshot highlighting the Open in Browser option",
  },
  {
    number: "3",
    title: "Tap the App Store button",
    body: "Tap “Download on the App Store” again.",
    image: step3ButtonUrl,
    alt: "Screenshot showing the App Store button highlighted",
  },
];

function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-ink px-6 py-3.5 text-left font-semibold text-background shadow-lg shadow-ink/20 transition active:scale-[0.98] hover:bg-ink/90 ${className}`}
    >
      <Apple className="h-7 w-7 shrink-0" aria-hidden="true" />
      <span className="leading-tight">
        <span className="block text-[11px] font-medium opacity-80">Download on the</span>
        <span className="block text-lg font-bold">App Store</span>
      </span>
    </a>
  );
}

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="overflow-hidden rounded-[2.3rem] bg-card">
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <Leaf className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
            <span className="truncate font-display text-2xl font-bold text-foreground">
              Naqi AI
            </span>
          </a>

          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-xl px-4 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-background transition active:scale-[0.98] hover:bg-ink/90"
          >
            Get Naqi AI
          </a>
        </div>

        <div className="flex gap-1 overflow-x-auto px-4 pb-2 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-10 shrink-0 items-center rounded-full bg-secondary px-4 text-sm font-medium text-secondary-foreground transition active:scale-[0.98]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pt-12 pb-14 lg:grid-cols-2 lg:gap-8 lg:pt-20 lg:pb-24">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
                <Leaf className="h-4 w-4" aria-hidden="true" />
                #1 Halal Food Scanner
              </span>

              <h1 className="mt-6 font-display text-5xl font-black leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
                Know what’s
                <br />
                <span className="text-primary">halal.</span> For sure.
              </h1>

              <p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground lg:mx-0">
                Instantly check if a product is halal, see what’s inside, and make better
                choices every day.
              </p>

              <div className="mt-8 flex justify-center lg:justify-start">
                <AppStoreButton className="w-full max-w-xs sm:w-auto" />
              </div>

              <div className="mt-7 flex flex-col items-center gap-2 sm:flex-row sm:justify-center lg:justify-start">
                <div className="flex items-center gap-1 text-accent">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm font-medium text-muted-foreground sm:ml-2">
                  Trusted by 50,000+ Muslims
                </p>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-md items-end justify-center gap-3 sm:gap-5">
              <Phone
                src="/hero-left.png"
                alt="Naqi AI scanning a product barcode"
                className="w-1/2 translate-y-4"
              />
              <Phone
                src="/hero-right.png"
                alt="Naqi AI Halal Verified product result screen"
                className="w-1/2"
              />
            </div>
          </div>
        </section>

        {/* Feature strip */}
        <section id="features" className="mx-auto max-w-6xl px-6 pb-16 scroll-mt-28">
          <div className="surface-card grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
            {strip.map(({ icon: Icon, title: t, body }) => (
              <div key={t} className="flex min-w-0 items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-foreground">{t}</h3>
                  <p className="text-sm text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why */}
        <section id="why" className="mx-auto max-w-6xl px-6 pb-20 scroll-mt-28">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:items-center">
            <h2 className="font-display text-4xl font-black leading-tight text-foreground sm:text-5xl">
              Why Muslims
              <br />
              <span className="text-primary">love Naqi AI</span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {why.map(({ icon: Icon, title: t, body }) => (
                <article key={t} className="surface-card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-secondary/50 py-20 scroll-mt-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="font-display text-4xl font-black text-foreground sm:text-5xl">
                How it works
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-lg text-muted-foreground">
                Three taps between you and a confident decision.
              </p>
            </div>

            <div className="mt-14 space-y-16">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                    i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="text-center lg:text-left">
                    <span className="font-display text-5xl font-black text-primary/25">
                      {step.number}
                    </span>
                    <h3 className="mt-2 font-display text-3xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground lg:mx-0">
                      {step.body}
                    </p>
                  </div>
                  <Phone
                    src={step.image}
                    alt={step.title}
                    className="mx-auto w-full max-w-[16rem]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-28">
          <h2 className="text-center font-display text-4xl font-black text-foreground sm:text-5xl">
            Loved in the aisles
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="surface-card flex h-full flex-col p-6">
                <div className="flex items-center gap-1 text-accent">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
                  {r.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-6 pb-20 scroll-mt-28">
          <h2 className="text-center font-display text-4xl font-black text-foreground sm:text-5xl">
            Questions, answered
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="surface-card group overflow-hidden">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-foreground">
                  {f.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="surface-card flex flex-col items-center px-6 py-12 text-center">
            <img
              src={appIconUrl}
              alt="Naqi AI app icon"
              width={88}
              height={88}
              className="app-icon-shadow h-22 w-22 rounded-[1.4rem]"
            />
            <h2 className="mt-6 font-display text-4xl font-black text-foreground sm:text-5xl">
              Eat clean. Stay Naqi.
            </h2>
            <p className="mt-3 max-w-md text-lg text-muted-foreground">
              Download the app and scan your first product in under a minute.
            </p>
            <AppStoreButton className="mt-8 w-full max-w-xs sm:w-auto" />

            <details className="mt-8 w-full max-w-xl text-left">
              <summary className="mx-auto flex min-h-12 w-fit cursor-pointer list-none items-center gap-2 rounded-full bg-secondary px-5 text-sm font-semibold text-secondary-foreground">
                Button not working in TikTok or Instagram?
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                In-app browsers block App Store links. Follow these steps:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {fallbackSteps.map((s) => (
                  <article key={s.number} className="rounded-2xl border border-border bg-card p-3">
                    <div className="flex items-start gap-2">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-black text-primary-foreground">
                        {s.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                        <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                          {s.body}
                        </p>
                      </div>
                    </div>
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      className="mt-3 block w-full rounded-xl border border-border"
                    />
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="font-display text-lg font-bold text-foreground">Naqi AI</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1">
            <a
              href={privacyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-xl px-4 text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-xl px-4 text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              Get the app
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Naqi AI</p>
        </div>
      </footer>
    </div>
  );
}
