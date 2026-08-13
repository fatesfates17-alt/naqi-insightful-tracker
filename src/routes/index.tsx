import { createFileRoute } from "@tanstack/react-router";
import { Apple } from "lucide-react";
import appIconAsset from "@/assets/app-icon.png.asset.json";
import step1MenuAsset from "@/assets/step1-menu.png.asset.json";
import step2OpenBrowserAsset from "@/assets/step2-open-browser.png.asset.json";
import step3ButtonAsset from "@/assets/step3-button.png.asset.json";

const title = "Naqi AI — Open in the App Store";
const description =
  "Naqi AI is the halal food scanner and nutrition tracker. Open it directly in the App Store.";

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

const tiktokSteps = [
  {
    number: "1",
    title: "Tap the ••• menu",
    body: "Top-right corner of the TikTok browser.",
    image: step1MenuAsset.url,
    alt: "Screenshot highlighting the three-dot menu in the top-right corner of a mobile browser",
  },
  {
    number: "2",
    title: "Tap “Open in Browser”",
    body: "Choose “Open in Safari” or “Open in Browser”.",
    image: step2OpenBrowserAsset.url,
    alt: "Screenshot highlighting the Open in Browser option in the mobile menu",
  },
  {
    number: "3",
    title: "Tap the App Store button",
    body: "Tap Open Naqi in the App Store again.",
    image: step3ButtonAsset.url,
    alt: "Screenshot showing the Naqi AI landing page with the App Store button highlighted",
  },
];

const instagramSteps = [
  {
    number: "1",
    title: "Tap the ••• menu",
    body: "Top-right corner of the Instagram browser.",
  },
  {
    number: "2",
    title: "Tap “Open in external browser”",
    body: "This opens the page in Safari or Chrome.",
  },
  {
    number: "3",
    title: "Tap the App Store button",
    body: "Tap Open Naqi in the App Store again.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto flex max-w-md flex-col items-center px-6 pt-12 pb-10 text-center">
        <div className="app-icon-shadow relative h-28 w-28 overflow-hidden rounded-[1.8rem]">
          <img
            src={appIconAsset.url}
            alt="Naqi AI app icon"
            width={112}
            height={112}
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          Naqi AI
        </h1>
        <p className="mt-2 text-lg font-medium text-muted-foreground">
          Halal Food Scanner & Nutrition Tracker
        </p>

        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary-glow"
        >
          <Apple className="h-6 w-6" aria-hidden="true" />
          Open Naqi in the App Store
        </a>
      </section>

      <section className="mx-auto max-w-md px-6 pb-16">
        <div className="surface-card p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              ?
            </span>
            <h2 className="text-lg font-bold text-foreground">Button not working?</h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            TikTok and some in-app browsers block App Store redirects. Follow these 3 steps:
          </p>

          <div className="mt-6 space-y-5">
            {steps.map((step) => (
              <article key={step.number} className="rounded-2xl border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-base font-black text-primary-foreground">
                    {step.number}
                  </span>
                  <div className="text-left">
                    <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </div>
                <div className="mt-4 overflow-hidden rounded-xl border border-border">
                  <img
                    src={step.image}
                    alt={step.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="block w-full"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        <a
          href={privacyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-primary"
        >
          Privacy Policy
        </a>
        <span className="mx-2">·</span>
        <span>© {new Date().getFullYear()} Naqi AI</span>
      </footer>
    </main>
  );
}
