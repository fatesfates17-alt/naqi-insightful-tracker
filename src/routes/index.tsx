import { createFileRoute } from "@tanstack/react-router";
import shot1 from "@/assets/shot1.png.asset.json";
import { Check, Leaf } from "lucide-react";
import shot2 from "@/assets/shot2.png.asset.json";
import shot3 from "@/assets/shot3.png.asset.json";

const title = "Naqi AI — Halal Calorie Tracking, Scanned in Seconds";
const description =
  "Naqi AI scans any product barcode to verify halal status and track calories, protein, carbs and fats. Pure nutrition tracking built for Muslims.";

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

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="phone-frame w-[260px] shrink-0 sm:w-[290px]">
      <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />
      <div className="overflow-hidden rounded-[2.4rem] bg-background">
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
      </div>
    </div>
  );
}

const features = [
  {
    title: "Halal verified",
    body: "Every ingredient list is checked against our halal database. Doubtful additives get flagged before you buy.",
  },
  {
    title: "Barcode to macros",
    body: "Point the camera, hold steady. Calories, protein, carbs and fats land in your day automatically.",
  },
  {
    title: "Weekly insights",
    body: "See totals, streaks and nutrient trends so you know exactly how the week actually went.",
  },
];

function Index() {
  const plans = [
    {
      name: "Monthly",
      price: "$6.99",
      period: "per month",
      blurb: "Full access, billed every month. Cancel anytime.",
      perks: [
        "Unlimited barcode scans",
        "Halal verification",
        "Weekly insights & trends",
        "Custom macro goals",
        "Meal history & streaks",
      ],
      featured: false,
    },
    {
      name: "Yearly",
      price: "$39.99",
      period: "per year",
      blurb: "Same features, just $3.30 a month — save 52%.",
      perks: [
        "Unlimited barcode scans",
        "Halal verification",
        "Weekly insights & trends",
        "Custom macro goals",
        "Meal history & streaks",
      ],
      featured: true,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <span className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <Leaf className="h-5 w-5 text-primary" strokeWidth={2.5} aria-hidden="true" />
          Naqi<span className="text-primary"> AI</span>
        </span>
        <div className="flex items-center gap-6">
          <a href="#pricing" className="hidden text-sm font-semibold text-muted-foreground transition hover:text-primary sm:inline">
            Pricing
          </a>
          <a
            href="#download"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow"
          >
            Get the app
          </a>
        </div>
      </header>

      <section
        className="px-6 pb-20 pt-10 text-center"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Halal nutrition, verified
          </span>
          <h1 className="mt-6 text-5xl font-black leading-[1.02] sm:text-7xl">
            Scan any product
            <br />
            <span className="text-primary">instantly.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Naqi AI reads the barcode, confirms it's halal, and logs the calories — before the box
            goes in the trolley.
          </p>
          <a
            href="#download"
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition hover:bg-primary-glow"
          >
            Download Naqi AI
          </a>
        </div>
        <div className="mt-14 flex justify-center">
          <Phone src={shot1.url} alt="Naqi AI scanning a cereal barcode and showing halal verified macros" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-3">
        {features.map((f) => (
          <article key={f.title} className="surface-card p-7">
            <h3 className="text-xl font-bold">{f.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Track calories
              <br />
              <span className="text-primary">with ease.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              A single ring shows how much of your daily goal is left. Protein, carbs and fats stack
              up underneath, updated with every scan and every meal you log.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Phone src={shot2.url} alt="Naqi AI daily tracking screen with calorie ring and macro bars" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 flex justify-center md:order-1 md:justify-start">
            <Phone src={shot3.url} alt="Naqi AI weekly analytics with calorie chart and nutrient breakdown" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              See insights.
              <br />
              <span className="text-primary">Stay on track.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Weekly totals, day-by-day charts and nutrient trends. Naqi AI tells you where the week
              went right and where it drifted.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Pricing
          </span>
          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
            Simple plans. <span className="text-primary">No surprises.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Start free, upgrade when you want unlimited scans and deeper insights.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? "relative rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-xl md:-mt-4 md:pb-12"
                  : "surface-card flex flex-col p-8"
              }
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-accent-foreground">
                  Best value
                </span>
              )}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-black tracking-tight">{plan.price}</span>
                <span
                  className={
                    plan.featured
                      ? "pb-1 text-sm text-primary-foreground/70"
                      : "pb-1 text-sm text-muted-foreground"
                  }
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={
                  plan.featured
                    ? "mt-3 text-sm text-primary-foreground/80"
                    : "mt-3 text-sm text-muted-foreground"
                }
              >
                {plan.blurb}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5">
                    <Check
                      className={plan.featured ? "mt-0.5 h-4 w-4 shrink-0 text-accent" : "mt-0.5 h-4 w-4 shrink-0 text-primary"}
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                    <span className={plan.featured ? "text-primary-foreground/90" : ""}>{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={
                  plan.featured
                    ? "mt-8 inline-flex w-full justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
                    : "mt-8 inline-flex w-full justify-center rounded-full border border-primary px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                }
              >
                {`Get ${plan.name}`}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="download" className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-4xl font-black sm:text-5xl">Eat clean. Stay Naqi.</h2>
          <p className="mx-auto mt-4 max-w-md text-primary-foreground/80">
            Halal verification and calorie tracking in one scan.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-10 py-5 text-lg font-bold text-accent-foreground shadow-lg transition hover:-translate-y-0.5 hover:opacity-95"
          >
            <Leaf className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
            Sign up & download free
          </a>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Free to start · No card required
          </p>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span>© {new Date().getFullYear()} Naqi AI</span>
          <nav className="flex items-center gap-6">
            <a href="#pricing" className="transition hover:text-primary">
              Pricing
            </a>
            <a
              href="https://honeysuckle-marmot-129.notion.site/Naqi-Ai-Privacy-policy-3a51f3cc9c3c8062a6f9e6c951e86ef1?pvs=74"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
