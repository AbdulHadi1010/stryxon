# Case Studies Content Management

This directory contains all case study content for the Stryxon portfolio, managed as local MDX files.

## 📁 Directory Structure

```
content/
└── case-studies/
    ├── agency-migration-aws.mdx
    ├── ai-saas-platform-rag.mdx
    └── README.md (this file)
```

## ✍️ Adding a New Case Study

1. **Create a new `.mdx` file** in this directory
2. **Use kebab-case** for the filename (e.g., `mobile-app-redesign.mdx`)
3. **Add frontmatter** at the top with required fields
4. **Write the content** below the frontmatter in Markdown/MDX

### Required Frontmatter Fields

```yaml
---
title: "Your Case Study Title"
clientName: "Client Name"
industry: "Industry Category"
challenge: "Brief description of the client's challenge"
solution: "Brief description of your solution"
results: "Quantifiable outcomes and results"
technologies:
  - Technology 1
  - Technology 2
  - Technology 3
imageUrl: "/images/case-studies/filename.png"
date: "2026-02-13" # ISO date format (YYYY-MM-DD)
published: true # Set to false to hide from sitemap/public pages
featured: false # Set to true to show on homepage
slug: "url-friendly-slug" # Must match filename (without .mdx)
---
```

### Example Case Study Template

```mdx
---
title: "Scaling E-commerce Platform for 10x Traffic"
clientName: "RetailCo Inc"
industry: "E-commerce"
challenge: "Platform couldn't handle Black Friday traffic spikes."
solution: "Migrated to serverless architecture with CDN caching."
results: "Handled 50,000 concurrent users, zero downtime, 40% cost reduction."
technologies:
  - Next.js
  - Vercel
  - Cloudflare
  - Redis
imageUrl: "/images/case-studies/retailco-scaling.png"
date: "2026-02-13"
published: true
featured: false
slug: "ecommerce-scaling-serverless"
---

# Scaling E-commerce Platform for 10x Traffic

## The Challenge

RetailCo's platform crashed every Black Friday...

[Your content here using Markdown/MDX]

---

Ready to scale your platform? [Contact us](/#contact).
```

## 📝 Content Guidelines

### Structure

- **H1 (`#`)**: Main title (repeat the frontmatter title)
- **H2 (`##`)**: Major sections (The Challenge, Our Solution, The Results)
- **H3 (`###`)**: Subsections

### Recommended Sections

1. **The Challenge**: Client's pain points and business context
2. **Our Solution**: Technical implementation, architecture decisions
3. **The Results**: Quantifiable outcomes, client testimonial
4. **Technologies Used**: Detailed tech stack
5. **Timeline**: Project duration and milestones

### Writing Style

- Use **specific numbers** (e.g., "65% cost reduction" not "significant savings")
- Include **client quotes** for social proof
- Highlight **business impact** over technical details
- Use **active voice** and clear language
- Add **visuals** (code snippets, diagrams) where helpful

## 🔧 Technical Details

### How It Works

1. **File Reading**: `lib/case-studies.ts` reads all `.mdx` files from this directory
2. **Frontmatter Parsing**: `gray-matter` extracts metadata from frontmatter
3. **Sitemap Generation**: Published case studies automatically appear in `sitemap.xml`
4. **Sorting**: Case studies are sorted by date (most recent first)

### Publishing Workflow

**To publish a case study:**

1. Set `published: true` in frontmatter
2. Commit and push to Git
3. Deploy (Vercel automatically rebuilds)
4. Case study appears in sitemap and public pages

**To unpublish (draft mode):**

1. Set `published: false` in frontmatter
2. File remains in repo but hidden from public

**To feature on homepage:**

1. Set `featured: true` in frontmatter
2. Limit to 3-4 featured case studies for best homepage UX

### File Naming Convention

- Use **kebab-case**: `my-case-study.mdx`
- Match **slug in frontmatter**: If file is `agency-migration.mdx`, slug should be `"agency-migration"`
- Avoid spaces, special characters: `✅ mobile-app-redesign.mdx` | `❌ Mobile App Redesign.mdx`

## 🖼️ Adding Images

1. **Upload images** to `/public/images/case-studies/`
2. **Reference in frontmatter**: `imageUrl: "/images/case-studies/your-image.png"`
3. **Optimize images** before uploading:
   - Max width: 1200px
   - Format: WebP or PNG
   - File size: < 500KB

## 🚀 Deployment

Changes to this directory trigger automatic deployment:

1. **Create/edit** a `.mdx` file locally
2. **Commit** to Git: `git add . && git commit -m "Add new case study"`
3. **Push** to GitHub: `git push`
4. **Vercel** automatically rebuilds and deploys (2-3 minutes)
5. **Check sitemap**: Visit `https://www.stryxon.com/sitemap.xml`

## 🐛 Troubleshooting

### Case study not appearing in sitemap?

- Check `published: true` in frontmatter
- Verify frontmatter syntax (valid YAML)
- Check `date` is in correct format: `YYYY-MM-DD`
- Rebuild with `npm run build` locally to test

### Frontmatter parsing error?

- Ensure frontmatter starts and ends with `---`
- Check all strings with special characters are in quotes
- Validate YAML syntax: https://www.yamllint.com/

### Missing from homepage featured section?

- Set `featured: true` in frontmatter
- Check `getFeaturedCaseStudies()` function in `lib/case-studies.ts`

## 📚 Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)
- [Gray Matter (Frontmatter Parser)](https://github.com/jonschlinkert/gray-matter)

---

**Questions?** Ask the dev team or check `/lib/case-studies.ts` for implementation details.
