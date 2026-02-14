import { FC } from "react";

export interface ServiceSchemaProps {
  /**
   * Service name (e.g., "OpenClaw Setup Service")
   */
  name: string;

  /**
   * Concise technical summary of the service
   */
  description: string;

  /**
   * Price in USD (can be starting price or fixed price)
   */
  price: string;

  /**
   * Price validity date (ISO format: YYYY-MM-DD)
   * @default "2026-12-31"
   */
  priceValidUntil?: string;

  /**
   * Aggregate rating value (1.0-5.0)
   * @default "5.0"
   */
  ratingValue?: string;

  /**
   * Number of reviews aggregated
   * @default "12"
   */
  reviewCount?: string;

  /**
   * Service area/category (e.g., "Cloud Infrastructure", "Web Development")
   */
  serviceType?: string;

  /**
   * Optional: Service URL (defaults to current page)
   */
  url?: string;
}

/**
 * ServiceSchema Component
 *
 * Generates JSON-LD structured data for Google Rich Snippets.
 * Displays star ratings, pricing, and "Service" tags in search results.
 *
 * @see https://schema.org/ProfessionalService
 * @see https://developers.google.com/search/docs/appearance/structured-data/service
 */
const ServiceSchema: FC<ServiceSchemaProps> = ({
  name,
  description,
  price,
  priceValidUntil = "2026-12-31",
  ratingValue = "5.0",
  reviewCount = "12",
  serviceType,
  url,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Stryxon",
      url: "https://www.stryxon.com",
      logo: "https://www.stryxon.com/images/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        email: "hello@stryxon.com",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price,
      priceValidUntil,
      availability: "https://schema.org/InStock",
      url: url || undefined,
    },
    ...(serviceType && { serviceType }),
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema;
