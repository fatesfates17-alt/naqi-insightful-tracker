import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { useEffect } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/naqi-ai-halal-food-scanner/id6791649745";

export const Route = createFileRoute("/download")({
  server: {
    handlers: {
      GET: () => {
        return new Response(null, {
          status: 302,
          headers: {
            Location: APP_STORE_URL,
          },
        });
      },
    },
  },
  head: () => ({
    meta: [
      { title: "Download Naqi AI" },
      { name: "description", content: "Redirecting to the Naqi AI App Store listing." },
      { property: "og:title", content: "Download Naqi AI" },
      { property: "og:description", content: "Redirecting to the Naqi AI App Store listing." },
    ],
  }),
  component: DownloadRedirect,
});

function DownloadRedirect() {
  useEffect(() => {
    window.location.replace(APP_STORE_URL);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-base text-muted-foreground">
        Redirecting to the App Store…
      </p>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        Download Naqi AI
      </a>
    </div>
  );
}
