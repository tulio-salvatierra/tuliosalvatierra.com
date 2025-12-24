export default function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tulio Salvatierra - Full-Stack Developer",
    "url": "https://tuliosalvatierra.com",
    "description": "Chicago-based full-stack developer creating modern web experiences and comprehensive IT support for businesses",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tuliosalvatierra.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tulio Salvatierra",
    "jobTitle": "Full-Stack Developer",
    "url": "https://tuliosalvatierra.com",
    "sameAs": [
      "https://www.linkedin.com/in/tulio-salvatierra/",
      "https://www.github.com/tulio-salvatierra"
    ],
    "email": "salvacorp@gmail.com",
    "telephone": "+1-786-314-6121",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "Web Development",
      "Full-Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "IT Support"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tulio Salvatierra - Web Development Services",
    "image": "https://tuliosalvatierra.com/og-image.jpg",
    "@id": "https://tuliosalvatierra.com",
    "url": "https://tuliosalvatierra.com",
    "telephone": "+1-786-314-6121",
    "email": "salvacorp@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/in/tulio-salvatierra/",
      "https://www.github.com/tulio-salvatierra"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Chicago"
    },
    "serviceType": [
      "Web Development",
      "Full-Stack Development",
      "E-commerce Development",
      "IT Support",
      "Cloud Solutions"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tuliosalvatierra.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

