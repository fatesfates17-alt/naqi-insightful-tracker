"""Automated check for the /download redirect route.

Verifies:
1. GET /download returns HTTP 302 or 307 pointing at the Naqi AI App Store listing.
2. When the App Store navigation is blocked (e.g. in-app browser), the
   client-side fallback page renders with a visible "Download Naqi AI" button.

Usage: python3 scripts/check_download.py [base_url]
Defaults to http://localhost:8080.
"""

import asyncio
import sys

import requests
from playwright.async_api import async_playwright

APP_STORE_URL = "https://apps.apple.com/us/app/naqi-ai-halal-food-scanner/id6791649745"
BASE_URL = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8080"


def check_redirect() -> None:
    resp = requests.get(f"{BASE_URL}/download", allow_redirects=False, timeout=30)
    assert resp.status_code in (302, 307), f"expected 302/307, got {resp.status_code}"
    location = resp.headers.get("Location", "")
    assert location == APP_STORE_URL, f"unexpected Location: {location!r}"
    print(f"PASS: /download -> {resp.status_code} Location: {location}")


async def check_fallback_button() -> None:
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 390, "height": 844})

        # Simulate an in-app browser blocking the automatic App Store redirect:
        # stub out location.replace/reload so the page stays put.
        await page.add_init_script(
            "window.location.replace = () => {};"
        )

        # Browser document navigations may receive the SSR fallback page (200)
        # instead of the bare 302; either is fine — what matters is that the
        # fallback renders when the App Store navigation is blocked.
        await page.goto(f"{BASE_URL}/download", wait_until="domcontentloaded")

        await page.wait_for_timeout(1000)
        assert page.url.startswith(BASE_URL), f"page unexpectedly navigated away to {page.url}"

        button = page.get_by_role("link", name="Download Naqi AI")
        await button.wait_for(state="visible", timeout=5000)
        href = await button.get_attribute("href")
        assert href == APP_STORE_URL, f"fallback button href mismatch: {href!r}"
        box = await button.bounding_box()
        assert box is not None and box["height"] >= 44, f"tap target too small: {box}"
        print(f"PASS: fallback page rendered with visible App Store button (href ok, height {box['height']:.0f}px)")

        await browser.close()


if __name__ == "__main__":
    check_redirect()
    asyncio.run(check_fallback_button())
    print("All /download checks passed.")
