# Creating og-image.png for Social Media Sharing

## Requirements

- **Size**: 1200 x 630 pixels
- **Format**: PNG or JPG
- **File size**: Under 5MB (ideally under 300KB)
- **Location**: `public/og-image.png`

## Design Guidelines

### Content to Include:

1. **Stryxon Technologies Logo** (prominent)
2. **Tagline**: "White-Label Web Development & Cloud Infrastructure Partner"
3. **Visual Elements**:
   - Tech-themed graphics (cloud, code, infrastructure icons)
   - Gradient background (indigo/purple theme matching your brand)
4. **Website URL**: www.stryxon.com (small, bottom corner)

### Design Tips:

- **Keep text readable**: Minimum 60px font size for headlines
- **Safe zones**: Keep important content 40px from edges
- **High contrast**: Ensure text is easily readable
- **Brand colors**: Use your indigo (#6366F1), purple (#A855F7) gradient theme

## Quick Creation Options:

### Option 1: Canva (Recommended - Easy)

1. Go to https://www.canva.com
2. Create custom size: 1200 x 630 px
3. Search templates: "Open Graph" or "Social Media Post"
4. Customize with your branding
5. Download as PNG
6. Place in `public/og-image.png`

### Option 2: Figma (Professional)

1. Open Figma
2. Create new frame: 1200 x 630 px
3. Design with your brand elements
4. Export as PNG @ 2x resolution
5. Place in `public/og-image.png`

### Option 3: Photoshop/GIMP

1. New document: 1200 x 630 px, 72 DPI
2. Design your image
3. Save as PNG
4. Optimize with TinyPNG
5. Place in `public/og-image.png`

### Option 4: AI Generation

Use AI tools like:

- DALL-E: "Create a professional og:image for a tech company specializing in cloud infrastructure"
- Midjourney: Similar prompt
- Then resize to 1200x630

## Example Layout:

```
┌─────────────────────────────────────────────┐
│                                             │
│   [Logo]                                    │
│                                             │
│   STRYXON TECHNOLOGIES                     │
│                                             │
│   White-Label Web Development &            │
│   Cloud Infrastructure Partner             │
│                                             │
│   [Tech icons: Cloud, Code, AI]            │
│                                             │
│                         www.stryxon.com    │
└─────────────────────────────────────────────┘
```

## Quick Template Code (HTML2Canvas approach):

If you want to generate it programmatically:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        margin: 0;
        width: 1200px;
        height: 630px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Arial", sans-serif;
        color: white;
      }
      .container {
        text-align: center;
        padding: 60px;
      }
      h1 {
        font-size: 72px;
        margin: 0 0 20px 0;
        font-weight: bold;
      }
      p {
        font-size: 36px;
        margin: 0;
        opacity: 0.9;
      }
      .url {
        position: absolute;
        bottom: 30px;
        right: 40px;
        font-size: 24px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>STRYXON TECHNOLOGIES</h1>
      <p>White-Label Web Development &<br />Cloud Infrastructure Partner</p>
    </div>
    <div class="url">www.stryxon.com</div>
  </body>
</html>
```

Take screenshot at 1200x630 and save as `public/og-image.png`

## After Creating:

1. Place file at: `public/og-image.png`
2. Test with:
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Inspector: https://www.linkedin.com/post-inspector/

3. Verify file size:

   ```powershell
   Get-Item "public\og-image.png" | Select-Object Name, Length
   ```

4. Optimize if needed:
   - Use TinyPNG: https://tinypng.com
   - Or ImageOptim (Mac)
   - Or Squoosh: https://squoosh.app

## Current Status

❌ **Missing**: You need to create this file before deploying

## Priority: HIGH

This image shows up when your website is shared on:

- Facebook
- Twitter/X
- LinkedIn
- WhatsApp
- Slack
- Discord
- Any social media platform

Without it, social shares look unprofessional and may not display correctly.
