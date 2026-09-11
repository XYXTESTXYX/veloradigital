# Velora Digital 🚐 | Curated Travel Itineraries & Digital Workspaces

A lightweight, modern e-commerce storefront for curated digital travel itineraries, Notion Trip Operating Systems, and interactive Google Maps pinpoint layers.

Built with **pure static HTML5**, **Tailwind CSS**, and **Vanilla JavaScript** — zero frameworks required, lightning-fast loading speeds, and 100% hostable on GitHub Pages, Cloudflare Pages, Netlify, or Vercel.

---

## ✨ Features

- **16 Dedicated Standalone Package Pages**: Every destination and tier format has its own SEO-rich landing page (`/pages/product-X-tier-Y.html`) with long-tail keywords, structured layout, and styled hero graphics.
- **Obfuscated Checkout Protection**: Creem payment links are Base64-masked and routed dynamically through client-side handlers to suppress browser status-bar hover sniffing and crawler scraping.
- **Interactive Visual Showcase**: Instant tab-switching preview for Google Maps pins, Notion OS workspace, and high-resolution PDF reading.
- **Lead Capture Magnet**: Built-in 24-hour Tokyo micro-guide capture form to prevent bounce exits and build an email audience.
- **SEO Field Notes Engine**: Pre-written logistics guides (Tokyo Metro vs Suica, Amalfi Ferry Guides, Iceland Ring Road Fuel Traps) targeting organic Google search volume.
- **Brand Van SVG Favicon & Emblem**: Responsive campervan icon embedded directly via Data URI across all 17 HTML files — zero broken image links.
- **10-Question Travel FAQ Accordion**: Resolves customer pre-purchase friction covering offline usage, device compatibility, free Notion accounts, and refunds.

---

## 📁 Project Structure

```text
velora-digital/
│
├── index.html                  # Main storefront & master catalog grid
├── generate-pages.js           # Automated builder that compiles all 16 pages
├── README.md                   # Project documentation
│
└── pages/                      # 16 Standalone Product Landing Pages
    ├── product-1-tier-1.html   # Tokyo: PDF Only 
    ├── product-1-tier-2.html   # Tokyo: PDF + Maps 
    ├── product-1-tier-3.html   # Tokyo: PDF + Maps + Notion 
    ├── product-1-tier-4.html   # Tokyo: Complete Bundle 
    ├── product-2-tier-1.html   # Amalfi: PDF Only 
    ├── product-2-tier-2.html   # Amalfi: PDF + Maps 
    ├── product-2-tier-3.html   # Amalfi: PDF + Maps + Notion 
    ├── product-2-tier-4.html   # Amalfi: Complete Bundle 
    ├── product-3-tier-1.html   # Iceland: PDF Only 
    ├── product-3-tier-2.html   # Iceland: PDF + Maps 
    ├── product-3-tier-3.html   # Iceland: PDF + Maps + Notion 
    ├── product-3-tier-4.html   # Iceland: Complete Bundle 
    ├── product-4-tier-1.html   # All-Access: PDF Only 
    ├── product-4-tier-2.html   # All-Access: PDF + Maps 
    ├── product-4-tier-3.html   # All-Access: PDF + Maps + Notion 
    └── product-4-tier-4.html   # All-Access: Complete Bundle 
