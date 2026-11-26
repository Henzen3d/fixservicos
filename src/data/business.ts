export const FIX_BUSINESS_ID = "https://fixblu.com.br/#organization";

export const FIX_ADDRESS = {
  "@type": "PostalAddress",
  "streetAddress": "Rua Germano Beduschi, 101 – Sala 102",
  "addressLocality": "Blumenau",
  "addressRegion": "SC",
  "postalCode": "89046-010",
  "addressCountry": "BR",
} as const;

export const FIX_SAME_AS = [
  "https://www.instagram.com/fixservicosereparos/",
  "https://www.facebook.com/FixServicoseReparos",
  "https://twitter.com/Fix_Blu",
  "https://www.google.com/maps/search/?api=1&query=Fix+Servi%C3%A7os&query_place_id=ChIJTyGA3_ob35QR5Iu8YYSNRIY",
] as const;

export const FIX_OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday",
    "opens": "08:00",
    "closes": "13:00",
  },
] as const;

/** Canonical Schema.org LocalBusiness entity for Fix Serviços (shared across pages). */
export const fixProviderSchema = {
  "@type": "LocalBusiness",
  "@id": FIX_BUSINESS_ID,
  "name": "Fix Serviços",
  "alternateName": ["Fix - Serviços e Reparos", "Fix Blumenau"],
  "url": "https://fixblu.com.br",
  "telephone": "+55-47-98804-1306",
  "email": "contato@fixblu.com.br",
  "image": "https://fixblu.com.br/og-fixblu.jpg",
  "address": FIX_ADDRESS,
  "areaServed": { "@type": "City", "name": "Blumenau" },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-47-98804-1306",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": ["Portuguese"],
    "url": "https://wa.me/5547988041306",
  },
  "sameAs": FIX_SAME_AS,
} as const;

/** Builds a Service JSON-LD schema referencing the canonical Fix Serviços provider. */
export function buildServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": fixProviderSchema,
    "areaServed": { "@type": "City", "name": "Blumenau" },
    "url": url,
  };
}
