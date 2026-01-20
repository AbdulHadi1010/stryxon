# Contact Form Setup Guide

## Current Configuration

The contact form is already integrated with Formspree and sends submissions to your email.

### Formspree Configuration

- **Form ID**: `mwvvqygl`
- **Endpoint**: `https://formspree.io/f/mwvvqygl`
- **Notification Email**: `abdulhadi.consulting@gmail.com`
- **Public Display Email**: `contact@stryxon.com` (obfuscated)

## How It Works

1. **Public-Facing Email**: `contact@stryxon.com`
   - Displayed on website with JavaScript obfuscation
   - Prevents email scraping by bots
   - Assembled client-side in browser

2. **Backend Email**: `abdulhadi.consulting@gmail.com`
   - Configured in Formspree dashboard
   - Never exposed in code or HTML
   - Receives all form submissions

3. **Form Protection**:
   - Formspree's built-in spam filtering
   - Honeypot fields (can be added)
   - Optional: Cloudflare Turnstile (see below)

## Setting Up Formspree (Already Done)

Your form is already configured, but if you need to change settings:

1. Go to [Formspree Dashboard](https://formspree.io/forms/mwvvqygl/settings)
2. Navigate to **Settings** → **Email Notifications**
3. Set notification email to: `abdulhadi.consulting@gmail.com`
4. Enable spam filtering features
5. Set up email templates (optional)

## Adding Cloudflare Turnstile (Optional Bot Protection)

Cloudflare Turnstile is a free, privacy-friendly CAPTCHA alternative that blocks bots.

### Step 1: Get Turnstile Keys

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Turnstile** in the sidebar
3. Click **Add Site**
4. Enter your domain: `stryxon.com` (or use `localhost` for testing)
5. Select **Managed** mode
6. Copy your:
   - **Site Key** (public)
   - **Secret Key** (private)

### Step 2: Add Keys to Environment Variables

Create `.env.local` file in your project root:

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key_here
TURNSTILE_SECRET_KEY=your_secret_key_here
```

### Step 3: Install Turnstile Package

```bash
pnpm add @marsidev/react-turnstile
```

### Step 4: Update Contact Form Component

Add Turnstile widget to `components/contact-form.tsx`:

```typescript
import Turnstile from '@marsidev/react-turnstile';

// Add state for turnstile token
const [turnstileToken, setTurnstileToken] = useState<string>('');

// Add widget before submit button
<Turnstile
  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
  onSuccess={(token) => setTurnstileToken(token)}
  className="mb-4"
/>

// Update form submission to include token
const response = await fetch("https://formspree.io/f/mwvvqygl", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ...formData,
    'cf-turnstile-response': turnstileToken
  }),
});
```

### Step 5: Verify Turnstile Token (Backend)

Add API route `app/api/verify-turnstile/route.ts`:

```typescript
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { token } = await request.json();

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    },
  );

  const data = await response.json();
  return NextResponse.json(data);
}
```

## Alternative: Rate Limiting Middleware

Add Next.js middleware for basic bot protection:

Create `middleware.ts` in project root:

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple rate limiting
const rateLimit = new Map<string, number[]>();

export function middleware(request: NextRequest) {
  const ip = request.ip || "unknown";
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 20;

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, []);
  }

  const requests = rateLimit.get(ip)!;
  const recentRequests = requests.filter((time) => now - time < windowMs);

  if (recentRequests.length >= maxRequests) {
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
```

## Testing Your Setup

1. **Test Form Submission**:
   - Fill out the form on your website
   - Check that email arrives at `abdulhadi.consulting@gmail.com`
   - Verify spam score in Formspree dashboard

2. **Test Email Obfuscation**:
   - View page source (Ctrl+U)
   - Search for "contact@stryxon.com"
   - Should only see "loading..." placeholder
   - Email should appear only after page loads

3. **Test Turnstile** (if implemented):
   - Submit form without completing challenge
   - Should be blocked
   - Complete challenge and submit
   - Should go through

## Security Best Practices

✅ **Currently Implemented**:

- Contact form with Formspree integration
- JavaScript email obfuscation in footer
- Backend email routing (private)
- Professional public email display

🔄 **Recommended Next Steps**:

- Add Cloudflare Turnstile for bot protection
- Set up rate limiting middleware
- Configure Formspree spam filtering
- Enable email forwarding from contact@stryxon.com

## Troubleshooting

**Form submissions not arriving?**

- Check Formspree dashboard for errors
- Verify notification email in settings
- Check spam folder

**Turnstile not loading?**

- Verify site key is correct
- Check domain matches Turnstile config
- Look for console errors

**Rate limiting too strict?**

- Adjust `maxRequests` value
- Increase `windowMs` window

## Support

- **Formspree Docs**: https://help.formspree.io/
- **Turnstile Docs**: https://developers.cloudflare.com/turnstile/
- **Next.js Middleware**: https://nextjs.org/docs/app/building-your-application/routing/middleware
