# Speed Checker Setup Instructions

## ✅ Implementation Complete!

The website speed checker has been successfully implemented. Here's what was created:

### Files Created:

1. **`/app/api/analyze/route.ts`** - API endpoint for Google PageSpeed Insights analysis
2. **`/app/api/speed-checker-contact/route.ts`** - API endpoint for lead capture form submissions
3. **`/app/speed-checker/page.tsx`** - Main speed checker page with UI
4. **`/components/ui/lead-capture-modal.tsx`** - Modal popup for qualified leads (score < 70)

### Navigation Updated:

- Added "Speed Checker" link to bottom dock navigation (between Services and Testimonials)

---

## 🔑 Required Setup

### 1. Get Google PageSpeed Insights API Key

**Steps:**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable "PageSpeed Insights API":
   - Navigate to "APIs & Services" → "Library"
   - Search for "PageSpeed Insights API"
   - Click "Enable"
4. Create API credentials:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key

**Free Tier:** 25,000 requests/month

### 2. Update Environment Variables

Open `.env.local` and replace `YOUR_API_KEY_HERE` with your actual API key:

```env
GOOGLE_PAGESPEED_API_KEY=AIzaSy...your_actual_key_here
```

**Important:** Restart your development server after updating environment variables.

---

## 🚀 How to Access

Visit: **http://localhost:3000/speed-checker**

---

## 🎯 Features

### User Flow:

1. User enters website URL
2. System analyzes performance (10-15 seconds)
3. Results display with:
   - Overall performance score (0-100)
   - Color-coded verdict (Poor/Needs Improvement/Good/Excellent)
   - Key metrics (LCP, FCP, TTI, Speed Index)
   - Page statistics (size, requests)
   - Top 3 optimization opportunities
   - Recommendations

### Lead Capture:

- **Automatic popup** when score < 70
- Captures: name, email, phone, message
- Stores: website URL, performance score
- Integrates with existing Formspree backend
- Success confirmation message

### Styling:

- Purple gradient theme matching your brand
- Dark mode design
- Fully responsive (mobile/tablet/desktop)
- Smooth animations and transitions
- Loading states

---

## 📊 Lead Storage Options

### Current Setup:

- Leads sent to Formspree (existing integration)
- Console logging for debugging

### Future Enhancements (Optional):

#### Option 1: Database Storage

```typescript
// Install Prisma
npm install prisma @prisma/client

// Create schema
model WebsiteLead {
  id                Int      @id @default(autoincrement())
  name              String
  email             String
  phone             String?
  message           String?
  website_url       String
  performance_score Int
  created_at        DateTime @default(now())
  contacted         Boolean  @default(false)
}
```

#### Option 2: Email Notifications

```typescript
// Install Nodemailer
npm install nodemailer

// Configure in speed-checker-contact route
await sendEmail({
  to: process.env.SALES_EMAIL,
  subject: `New Speed Checker Lead: ${name}`,
  html: leadEmailTemplate
});
```

#### Option 3: CRM Integration

- HubSpot API
- Salesforce API
- Pipedrive API
- etc.

---

## 🧪 Testing

### Test URLs:

- **Fast site:** `google.com` (should score 90+)
- **Slow site:** `example.com` with many scripts
- **Invalid URL:** `not-a-valid-url` (should show error)

### Test Lead Capture:

1. Test a site that scores < 70
2. Modal should appear automatically after 1 second
3. Fill form and submit
4. Check Formspree for submission
5. Success message should display

---

## 🔒 Security Features

- ✅ URL validation (format check)
- ✅ Sanitized API calls
- ✅ 30-second timeout on PageSpeed API
- ✅ API key stored server-side only
- ✅ Error handling for all edge cases

### Recommended Additions:

- Rate limiting (5 requests/IP/hour)
- Google reCAPTCHA v3 on contact form
- Input sanitization

---

## 📱 Responsive Design

- **Desktop:** Full-width layout with 4-column metrics grid
- **Tablet:** 2-column metrics grid
- **Mobile:** Single column, touch-friendly buttons

---

## 🐛 Troubleshooting

### "API key not configured" error

- Ensure `GOOGLE_PAGESPEED_API_KEY` is in `.env.local`
- Restart development server: `pnpm dev`

### "Failed to analyze website" error

- Check if PageSpeed Insights API is enabled in Google Cloud
- Verify API key has no restrictions blocking the API
- Check API quota (25k/month free tier)

### Modal not appearing

- Check if score < 70 (modal only shows for qualified leads)
- Check browser console for JavaScript errors

### Formspree not receiving submissions

- Verify Formspree ID is correct (mwvvqygl)
- Check Formspree dashboard for submissions

---

## 🎨 Customization Options

### Change Qualified Lead Threshold:

In `/app/speed-checker/page.tsx`, line 80:

```typescript
is_qualified_lead: performanceScore < 70; // Change to 60, 80, etc.
```

### Modify Color Scheme:

In `/app/speed-checker/page.tsx`, `getScoreColor()` function:

```typescript
if (score < 50) return { bg: "from-red-500...", ... }
```

### Adjust Analysis Timeout:

In `/app/api/analyze/route.ts`, line 42:

```typescript
setTimeout(() => controller.abort(), 30000); // Change to 20000, 40000, etc.
```

---

## 📈 Analytics Tracking (Optional)

Add Google Analytics events:

```typescript
// After successful analysis
gtag("event", "speed_check_completed", {
  url: websiteUrl,
  score: performanceScore,
  qualified_lead: isQualifiedLead,
});

// After form submission
gtag("event", "lead_captured", {
  source: "speed_checker",
});
```

---

## 🚀 Next Steps

1. **Get API Key** from Google Cloud Console
2. **Update `.env.local`** with your API key
3. **Restart dev server:** `pnpm dev`
4. **Test:** Visit http://localhost:3000/speed-checker
5. **Deploy:** Push to production

---

## 📞 Support

If you need help with:

- Database integration
- Email notifications
- CRM connections
- Custom features

Let me know and I can implement those next!

---

**Status:** ✅ Ready to use (after API key setup)
