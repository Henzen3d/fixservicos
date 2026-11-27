export const FIX_URL = "https://fixblu.com.br";
export const FIX_BUSINESS_ID = `${FIX_URL}/#organization`;
export const FIX_WEBSITE_ID = `${FIX_URL}/#website`;
export const FIX_PERSON_ID = `${FIX_URL}/#osmar`;

export const FIX_NAME = "Fix Serviços";
export const FIX_ALTERNATE_NAMES = ["Fix - Serviços e Reparos", "Fix Blumenau"] as const;

export const FIX_PHONE_WA = "5547988041306";
export const FIX_PHONE_DISPLAY = "(47) 98804-1306";
export const FIX_PHONE_E164 = "+55-47-98804-1306";
export const FIX_PHONE_TEL = "tel:+5547988041306";
export const FIX_EMAIL = "contato@fixblu.com.br";
export const FIX_IMAGE = `${FIX_URL}/og-fixblu.jpg`;

export const FIX_OPENING_HOURS_SHORT = "Seg–Sex: 08h às 18h";
export const FIX_CLOSED_DAYS_SHORT = "Sábados e Domingos: Fechado";
export const FIX_OPENING_HOURS_TEXT = "Segunda a Sexta, das 08:00 às 18:00 (fechado aos sábados e domingos)";

export const FIX_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Fix+Servi%C3%A7os&query_place_id=ChIJTyGA3_ob35QR5Iu8YYSNRIY";
export const FIX_REVIEWS_URL =
  "https://www.google.com/search?q=Fix+Servi%C3%A7os+e+Reparos+Blumenau#lrd=0x94df1bfadf80214f:0x86448d8461bc8be4,1";

export const FIX_AREA_SERVED = {
  "@type": "City",
  "name": "Blumenau",
} as const;

export const FIX_ADDRESS = {
  "@type": "PostalAddress",
  "streetAddress": "Rua Germano Beduschi, 101 – Sala 102",
  "addressLocality": "Blumenau",
  "addressRegion": "SC",
  "postalCode": "89046-010",
  "addressCountry": "BR",
} as const;

export const FIX_GEO = {
  "@type": "GeoCoordinates",
  "latitude": "-26.9194",
  "longitude": "-49.0661",
} as const;

export const FIX_SAME_AS = [
  "https://www.instagram.com/fixservicosereparos/",
  "https://www.facebook.com/FixServicoseReparos",
  "https://twitter.com/Fix_Blu",
  FIX_MAPS_URL,
] as const;

export const FIX_OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00",
  },
] as const;

export const FIX_TECHNICIAN = {
  name: "Osmar Gonçalves",
  displayName: "Técnico Osmar",
  role: "Técnico em Edificações (SENAI) · Certificações NR10, NR18, NR33 e NR35",
} as const;

export const FIX_SERVICE_CATALOG_ITEMS = [
  { name: "Eletricista em Blumenau", url: `${FIX_URL}/eletricista/` },
  { name: "Encanador em Blumenau", url: `${FIX_URL}/encanador/` },
  { name: "Marido de Aluguel em Blumenau", url: `${FIX_URL}/marido-de-aluguel/` },
  { name: "Casa Inteligente em Blumenau", url: `${FIX_URL}/casa-inteligente/` },
] as const;

/** Builds a WhatsApp link using the single official Fix Serviços phone number. */
export function buildWhatsAppUrl(
  message = "Olá! Vi o site e preciso de um orçamento para um reparo em Blumenau."
): string {
  return `https://wa.me/${FIX_PHONE_WA}?text=${encodeURIComponent(message)}`;
}

/** Reference node for embedded/linked provider references within @graph. */
export const fixOrganizationRef = { "@id": FIX_BUSINESS_ID } as const;

/** Canonical Schema.org organization/business node for Fix Serviços. */
export function buildOrganizationNode(options?: {
  description?: string;
  includeCatalog?: boolean;
  includeGeo?: boolean;
}) {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": FIX_BUSINESS_ID,
    "name": FIX_NAME,
    "alternateName": FIX_ALTERNATE_NAMES,
    ...(options?.description ? { "description": options.description } : {}),
    "url": FIX_URL,
    "telephone": FIX_PHONE_E164,
    "email": FIX_EMAIL,
    "image": FIX_IMAGE,
    "priceRange": "$$",
    "address": FIX_ADDRESS,
    ...(options?.includeGeo ? { "geo": FIX_GEO } : {}),
    "areaServed": FIX_AREA_SERVED,
    "openingHoursSpecification": FIX_OPENING_HOURS,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": FIX_PHONE_E164,
      "contactType": "customer service",
      "areaServed": FIX_AREA_SERVED,
      "availableLanguage": ["Portuguese"],
      "hoursAvailable": FIX_OPENING_HOURS,
      "url": `https://wa.me/${FIX_PHONE_WA}`,
    },
    "sameAs": FIX_SAME_AS,
    ...(options?.includeCatalog
      ? {
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços Fix Blumenau",
            "itemListElement": FIX_SERVICE_CATALOG_ITEMS.map((item) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "@id": `${item.url}#service`,
                "name": item.name,
                "url": item.url,
              },
            })),
          },
        }
      : {}),
  };
}

/** Canonical Schema.org WebSite node. */
export const fixWebsiteNode = {
  "@type": "WebSite",
  "@id": FIX_WEBSITE_ID,
  "name": FIX_NAME,
  "url": `${FIX_URL}/`,
  "inLanguage": "pt-BR",
  "publisher": fixOrganizationRef,
} as const;

/** Canonical Schema.org Person node for Técnico Osmar Gonçalves. */
export function buildTechnicianNode(jobTitle = FIX_TECHNICIAN.role) {
  return {
    "@type": "Person",
    "@id": FIX_PERSON_ID,
    "name": FIX_TECHNICIAN.name,
    "alternateName": FIX_TECHNICIAN.displayName,
    "jobTitle": jobTitle,
    "worksFor": fixOrganizationRef,
  };
}

/** Canonical Schema.org provider object (legacy alias kept for compatibility). */
export const fixProviderSchema = fixOrganizationRef;

/** Builds the complete JSON-LD @graph for the homepage. */
export function buildHomeSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationNode({ description, includeCatalog: true, includeGeo: true }),
      fixWebsiteNode,
      {
        "@type": "WebPage",
        "@id": `${FIX_URL}/#webpage`,
        "url": `${FIX_URL}/`,
        "name": "Eletricista, Encanador e Marido de Aluguel em Blumenau | Fix Serviços",
        "description": description,
        "inLanguage": "pt-BR",
        "isPartOf": { "@id": FIX_WEBSITE_ID },
        "about": fixOrganizationRef,
      },
    ],
  };
}

/** Builds the complete JSON-LD @graph for the Contact page. */
export function buildContactSchema(description: string) {
  const canonical = `${FIX_URL}/contato/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationNode({ description, includeGeo: true }),
      fixWebsiteNode,
      {
        "@type": "ContactPage",
        "@id": `${canonical}#webpage`,
        "url": canonical,
        "name": "Contato e Perguntas Frequentes - Fix Serviços",
        "description": description,
        "inLanguage": "pt-BR",
        "isPartOf": { "@id": FIX_WEBSITE_ID },
        "about": fixOrganizationRef,
      },
    ],
  };
}

/** Builds the complete JSON-LD @graph for the /servicos/ catalog page. */
export function buildServicesCatalogSchema(description: string) {
  const canonical = `${FIX_URL}/servicos/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationNode({ description, includeCatalog: true }),
      fixWebsiteNode,
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#webpage`,
        "url": canonical,
        "name": "Serviços para Blumenau - Fix Serviços",
        "description": description,
        "inLanguage": "pt-BR",
        "isPartOf": { "@id": FIX_WEBSITE_ID },
        "about": fixOrganizationRef,
      },
    ],
  };
}

/** Builds the complete JSON-LD @graph for a category hub page. */
export function buildServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationNode(),
      fixWebsiteNode,
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": name,
        "description": description,
        "inLanguage": "pt-BR",
        "isPartOf": { "@id": FIX_WEBSITE_ID },
        "mainEntity": { "@id": `${url}#service` },
        "breadcrumb": { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        "name": name,
        "description": description,
        "provider": fixOrganizationRef,
        "areaServed": FIX_AREA_SERVED,
        "url": url,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${FIX_URL}/` },
          { "@type": "ListItem", "position": 2, "name": name, "item": url },
        ],
      },
    ],
  };
}

/** Builds the complete JSON-LD @graph for a specific service detail page. */
export function buildServiceDetailSchema(params: {
  name: string;
  description: string;
  url: string;
  category: string;
  categoryUrl: string;
}) {
  const { name, description, url, category, categoryUrl } = params;
  const fullCategoryUrl = new URL(categoryUrl, FIX_URL).toString();
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationNode(),
      fixWebsiteNode,
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": name,
        "description": description,
        "inLanguage": "pt-BR",
        "isPartOf": { "@id": FIX_WEBSITE_ID },
        "mainEntity": { "@id": `${url}#service` },
        "breadcrumb": { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        "name": name,
        "description": description,
        "provider": fixOrganizationRef,
        "areaServed": FIX_AREA_SERVED,
        "url": url,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${FIX_URL}/` },
          { "@type": "ListItem", "position": 2, "name": category, "item": fullCategoryUrl },
          { "@type": "ListItem", "position": 3, "name": name, "item": url },
        ],
      },
    ],
  };
}

/** Builds the complete JSON-LD @graph for the blog index page. */
export function buildBlogIndexSchema(
  description: string,
  posts: ReadonlyArray<{ slug: string; title: string; description: string; date: string; updatedDate?: string }>
) {
  const canonical = `${FIX_URL}/blog/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationNode(),
      fixWebsiteNode,
      buildTechnicianNode(),
      {
        "@type": "Blog",
        "@id": `${canonical}#blog`,
        "name": "Blog Fix Serviços Blumenau",
        "description": description,
        "url": canonical,
        "inLanguage": "pt-BR",
        "publisher": fixOrganizationRef,
        "blogPost": posts.map((post) => ({
          "@type": "BlogPosting",
          "@id": `${FIX_URL}/blog/${post.slug}/#article`,
          "headline": post.title,
          "description": post.description,
          "datePublished": post.date,
          "dateModified": post.updatedDate ?? post.date,
          "url": `${FIX_URL}/blog/${post.slug}/`,
          "author": { "@id": FIX_PERSON_ID },
        })),
      },
    ],
  };
}

/** Builds the complete JSON-LD @graph for an individual blog post page. */
export function buildBlogPostSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  category: string;
  author: { name: string; role: string };
}) {
  const canonical = `${FIX_URL}/blog/${post.slug}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationNode(),
      fixWebsiteNode,
      buildTechnicianNode(post.author.role),
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        "url": canonical,
        "name": post.title,
        "description": post.description,
        "inLanguage": "pt-BR",
        "isPartOf": { "@id": FIX_WEBSITE_ID },
        "mainEntity": { "@id": `${canonical}#article` },
        "breadcrumb": { "@id": `${canonical}#breadcrumb` },
      },
      {
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        "headline": post.title,
        "description": post.description,
        "datePublished": post.date,
        "dateModified": post.updatedDate ?? post.date,
        "inLanguage": "pt-BR",
        "mainEntityOfPage": { "@id": `${canonical}#webpage` },
        "url": canonical,
        "image": FIX_IMAGE,
        "author": { "@id": FIX_PERSON_ID },
        "publisher": fixOrganizationRef,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": `${FIX_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${FIX_URL}/blog/` },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": canonical },
        ],
      },
    ],
  };
}
