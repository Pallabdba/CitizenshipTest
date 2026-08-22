import { useEffect } from "react";

export const SITE_URL = "https://auscitizentest.com";
export const SITE_NAME = "Australian Citizenship Test";

const DEFAULTS = {
  title:
    "Australian Citizenship Test Practice — Free Questions, Flashcards & Study Guide",
  description:
    "Free Australian citizenship test practice with 219 official-style questions, 10 full practice tests, 243 flashcards and the complete 'Our Common Bond' study guide.",
};

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export interface SeoOptions {
  title: string;
  description: string;
  /** Path beginning with "/" */
  path: string;
  jsonLd?: unknown;
  noindex?: boolean;
}

/**
 * Keeps <title>, meta description, canonical and Open Graph tags in sync with
 * the current route. Static HTML for indexable routes is also generated at
 * build time (scripts/prerender.mjs) — this hook handles client-side
 * navigation after the app has booted.
 */
export function useSeo({ title, description, path, jsonLd, noindex }: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
    );
    setLink("canonical", url);

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-page-jsonld", "true");
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, [title, description, path, noindex, JSON.stringify(jsonLd)]);
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export { DEFAULTS as seoDefaults };
