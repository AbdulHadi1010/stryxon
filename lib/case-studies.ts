import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

// Type definitions for case study frontmatter
export interface CaseStudyFrontmatter {
  title: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  imageUrl?: string;
  date: string; // ISO date string (e.g., "2026-01-15")
  published: boolean;
  featured?: boolean;
  slug: string;
}

export interface CaseStudy {
  frontmatter: CaseStudyFrontmatter;
  content: string; // Full markdown content
  slug: string; // Derived from filename or frontmatter
}

// Path to the case studies directory
const CASE_STUDIES_DIR = path.join(process.cwd(), "content", "case-studies");

/**
 * Get all case studies from the local filesystem
 * Reads all .mdx files from /content/case-studies/
 * @param onlyPublished - If true, only returns published case studies
 * @returns Array of case studies with parsed frontmatter and content
 */
export async function getAllCaseStudies(
  onlyPublished = false,
): Promise<CaseStudy[]> {
  try {
    // Ensure the directory exists
    await fs.access(CASE_STUDIES_DIR);

    // Read all files in the directory
    const files = await fs.readdir(CASE_STUDIES_DIR);

    // Filter for .md and .mdx files
    const mdxFiles = files.filter(
      (file) => file.endsWith(".md") || file.endsWith(".mdx"),
    );

    // Read and parse each file
    const caseStudies = await Promise.all(
      mdxFiles.map(async (filename) => {
        const filePath = path.join(CASE_STUDIES_DIR, filename);
        const fileContent = await fs.readFile(filePath, "utf-8");

        // Parse frontmatter with gray-matter
        const { data, content } = matter(fileContent);

        // Extract slug from filename (remove extension) or use frontmatter slug
        const slug = data.slug || filename.replace(/\.mdx?$/, "");

        return {
          frontmatter: {
            ...data,
            slug,
          } as CaseStudyFrontmatter,
          content,
          slug,
        };
      }),
    );

    // Filter by published status if requested
    const filteredCaseStudies = onlyPublished
      ? caseStudies.filter((cs) => cs.frontmatter.published === true)
      : caseStudies;

    // Sort by date (most recent first)
    return filteredCaseStudies.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    // If directory doesn't exist or other errors, return empty array
    console.error("Error reading case studies:", error);
    return [];
  }
}

/**
 * Get a single case study by slug
 * @param slug - URL-friendly identifier (e.g., "agency-migration-aws")
 * @returns Case study or null if not found
 */
export async function getCaseStudyBySlug(
  slug: string,
): Promise<CaseStudy | null> {
  try {
    const allCaseStudies = await getAllCaseStudies();
    const caseStudy = allCaseStudies.find((cs) => cs.slug === slug);
    return caseStudy || null;
  } catch (error) {
    console.error(`Error fetching case study with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Get only published case studies (for public-facing pages)
 * @returns Array of published case studies
 */
export async function getPublishedCaseStudies(): Promise<CaseStudy[]> {
  return getAllCaseStudies(true);
}

/**
 * Get featured case studies (for homepage showcase)
 * @returns Array of featured case studies
 */
export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  const publishedCaseStudies = await getPublishedCaseStudies();
  return publishedCaseStudies.filter((cs) => cs.frontmatter.featured === true);
}

/**
 * Get case study metadata only (without full content)
 * Useful for listing pages where full content isn't needed
 * @returns Array of case studies with only frontmatter
 */
export async function getCaseStudyMetadata(
  onlyPublished = true,
): Promise<CaseStudyFrontmatter[]> {
  const caseStudies = await getAllCaseStudies(onlyPublished);
  return caseStudies.map((cs) => cs.frontmatter);
}
