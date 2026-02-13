import { MetadataRoute } from "next";

// TODO: Uncomment after Prisma setup
// import { prisma } from "@/lib/prisma";

/**
 * Dynamic sitemap generator for stryxon.com
 * Automatically includes database content (courses, templates, case studies)
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
  // DYNAMIC DATABASE ROUTES - Fetched from Prisma
  // ============================================================================

  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    // TODO: Uncomment after Prisma setup and database schema is ready
    /*
    // Fetch published courses
    const courses = await prisma.course.findMany({
      where: { published: true },
      select: { 
        slug: true, 
        updatedAt: true,
        // Or id: true if using ID-based URLs
      },
    });

    const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
      url: `${baseUrl}/courses/${course.slug}`, // or course.id
      lastModified: course.updatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

    // Fetch published templates
    const templates = await prisma.template.findMany({
      where: { published: true },
      select: { 
        slug: true, 
        updatedAt: true,
        // Or id: true if using ID-based URLs
      },
    });

    const templateRoutes: MetadataRoute.Sitemap = templates.map((template) => ({
      url: `${baseUrl}/templates/${template.slug}`, // or template.id
      lastModified: template.updatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

    // Fetch case studies (if dynamic in database)
    const caseStudies = await prisma.caseStudy.findMany({
      where: { published: true },
      select: { 
        slug: true, 
        updatedAt: true,
      },
    });

    const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: study.updatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    }));

    dynamicRoutes = [...courseRoutes, ...templateRoutes, ...caseStudyRoutes];
    */

    // TEMPORARY: Hardcoded case study until database is ready
    dynamicRoutes = [
      {
        url: `${baseUrl}/case-studies/agency-migration`,
        lastModified: new Date("2026-02-01"),
        changeFrequency: "monthly",
        priority: 0.9,
      },
    ];
  } catch (error) {
    // Graceful degradation: If database fails, sitemap still works
    console.error("Sitemap generation - Database fetch failed:", error);
    // Return static routes only
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
