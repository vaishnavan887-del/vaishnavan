# Google AdSense Setup Guide

## Step 1: Apply for AdSense

1. Go to https://www.google.com/adsense
2. Click "Get Started"
3. Sign in with your Google account
4. Enter your website: `https://vaishnavan.vercel.app`
5. Select your country: Sri Lanka
6. Choose payment method
7. Submit application

**Wait for approval (usually 1-14 days)**

## Step 2: After Approval - Add AdSense Code

Once you receive approval email, you'll get your AdSense code. It will look like:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
     crossorigin="anonymous"></script>
```

### Add to `app/layout.tsx`

Add the AdSense script in the `<head>` section:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationData = generateOrganizationStructuredData()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* AdSense Code - Add this after approval */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
```

**Replace `ca-pub-XXXXXXXXXX` with your actual AdSense publisher ID**

## Step 3: Update ads.txt File

Edit `public/ads.txt` and add your publisher ID:

```
google.com, pub-XXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

**Replace `pub-XXXXXXXXXX` with your actual AdSense publisher ID**

## Step 4: Deploy Changes

After adding the code:

1. Commit changes:
   ```bash
   git add .
   git commit -m "Add AdSense code"
   git push
   ```

2. Vercel will automatically deploy

3. Verify ads.txt is accessible:
   - Visit: `https://vaishnavan.vercel.app/ads.txt`
   - Should show your publisher ID

## Step 5: Place Ads (Optional)

You can add ad units in your blog posts or other pages. Example:

```tsx
// In a blog post or page component
<ins
  className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-XXXXXXXXXX"
  data-ad-slot="XXXXXXXXXX"
  data-ad-format="auto"
  data-full-width-responsive="true"
></ins>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

## Important Notes

- ✅ Don't click your own ads (violates AdSense policy)
- ✅ Wait for approval before adding code
- ✅ Keep ads.txt file updated
- ✅ Follow AdSense policies
- ✅ Don't ask others to click ads

## Troubleshooting

- **Ads not showing?** Wait 24-48 hours after adding code
- **ads.txt not working?** Make sure file is in `public/` folder
- **Need help?** Check AdSense Help Center
