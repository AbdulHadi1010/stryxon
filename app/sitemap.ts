import { MetadataRoute } from "next";
import { getPublishedCaseStudies } from "@/lib/case-studies";

/**
 * Dynamic sitemap generator for stryxon.com
 * Automatically includes case studies from local MDX files
 * SEO Best Practice: Keep blog subdomain separate with its own sitemap
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.stryxon.com";
  const currentDate = new Date();

  // ============================================================================
  // STATIC CORE ROUTES - Marketing pages that rarely change
  // ============================================================================
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // ============================================================================
  // STATIC SERVICE PAGES - High-value conversion pages
  // ============================================================================
  const serviceRoutes: MetadataRoute.Sitemap = [
    "cloud-infrastructure",
    "ai-engineering",
    "web-development",
    "mobile-development",
    "devops",
    "api-development",
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // ============================================================================
  // STATIC SECTION ANCHORS - Lower priority than full pages
  // ============================================================================
  const sectionRoutes: MetadataRoute.Sitemap = [
    { anchor: "services", priority: 0.8, frequency: "weekly" as const },
    { anchor: "testimonials", priority: 0.7, frequency: "monthly" as const },
    { anchor: "speed-checker", priority: 0.8, frequency: "weekly" as const },
    { anchor: "contact", priority: 0.7, frequency: "monthly" as const },
  ].map(({ anchor, priority, frequency }) => ({
    url: `${baseUrl}/#${anchor}`,
    lastModified: currentDate,
    changeFrequency: frequency,
    priority,
  }));

  // ============================================================================
  // DYNAMIC CASE STUDY ROUTES - From Local MDX Files
  // ============================================================================

  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    // Fetch all published case studies from /content/case-studies/
    const caseStudies = await getPublishedCaseStudies();

    dynamicRoutes = caseStudies.map((study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: new Date(study.frontmatter.date), // Use date from frontmatter
      changeFrequency: "monthly",
      priority: 0.9, // High priority for portfolio content
    }));
  } catch (error) {
    // Graceful degradation: If filesystem read fails, sitemap still works
    // Only static routes will be included (Home, Services, About, Contact)
    console.error("Sitemap generation - Case studies fetch failed:", error);
    console.warn("Falling back to static routes only");
    // dynamicRoutes remains empty array, sitemap continues without case studies
  }

  // ============================================================================
  // COMBINE ALL ROUTES
  // ============================================================================
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...sectionRoutes,
    ...dynamicRoutes,
  ];
}
