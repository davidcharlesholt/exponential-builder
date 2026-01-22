# SEO & Accessibility Audit Report
**Date:** 2026-01-22
**Site:** David Holt - ExponentialBuilder.com

## Executive Summary
This audit identified several SEO and accessibility issues that need to be addressed for optimal search engine visibility and user experience.

## Critical Issues Found

### 1. Multiple H1 Tags Per Page ❌
**Issue:** Each page has multiple H1 tags, which confuses search engines about page hierarchy.
- Sidebar contains: `<h1>Built to Compound.</h1>` (tagline)
- Main content also contains H1s (e.g., "Built to Compound" in Manifesto, article titles)
- This violates the "one H1 per page" best practice

**Impact:** High - Dilutes SEO value, confuses screen readers
**Fix:** Change sidebar H1 to a styled `<div>` or `<p>` (it's a tagline, not the page heading)

### 2. Missing Open Graph & Twitter Card Metadata ❌
**Issue:** No social sharing metadata present
- No `og:title`, `og:description`, `og:image`
- No Twitter Card tags
- Default unfurl will be poor on social platforms

**Impact:** Medium - Poor social media previews, lower click-through rates
**Fix:** Add comprehensive Open Graph and Twitter Card metadata to root layout

### 3. No Canonical URLs ❌
**Issue:** Missing canonical URL tags
**Impact:** Medium - Risk of duplicate content issues
**Fix:** Add canonical URLs using Next.js metadata

### 4. Incorrect Heading Hierarchy ❌
**Issue:** Sidebar uses `<h2>` for "David Holt" (person name), which should appear before any H2 in semantic order
**Impact:** Low-Medium - Confusing document outline for accessibility tools
**Fix:** Change to a styled `<div>` with appropriate font sizing

### 5. Client Component Unnecessarily ⚠️
**Issue:** Main `page.tsx` is a client component ("use client") for tab navigation state
**Impact:** Low - Slightly worse SEO crawlability and performance
**Note:** This is acceptable for this use case, but worth noting

## Positive Findings ✅

### What's Working Well:
1. **Alt text present** on all images (headshot, logo, project icons)
2. **Semantic HTML** - Uses `<aside>`, `<main>`, proper structure
3. **ARIA labels** - Social links have proper `aria-label` attributes
4. **Language attribute** - `<html lang="en">` is set correctly
5. **Font optimization** - Using Next.js font optimization
6. **Favicon** - icon.png present in app directory
7. **Mobile responsive** - Proper viewport and responsive design
8. **Accessible forms** - Email input has proper `type="email"` and `required`

## Recommendations

### High Priority
1. ✅ Fix H1 tag duplication (change sidebar tagline to styled div)
2. ✅ Add Open Graph and Twitter Card metadata
3. ✅ Add canonical URLs
4. ✅ Fix heading hierarchy (sidebar name)

### Medium Priority
5. Consider adding structured data (JSON-LD) for Person and Article schema
6. Add meta robots tags if needed for specific pages
7. Consider adding a sitemap.xml

### Low Priority
8. The client component for page.tsx is acceptable given the interactive tabs
9. Consider adding skip-to-content link for keyboard navigation
10. Add more descriptive page titles for different sections (dynamic metadata based on active tab)

## Fixes Applied

### 1. Fixed H1 Tag Duplication ✅
**Files Modified:** `src/components/sidebar.tsx`

**Changes:**
- Changed `<h1>Built to Compound.</h1>` to `<div>` with same styling
- Changed `<h2>David Holt</h2>` to `<div>` with same styling
- **Why:** Sidebar contains branding/tagline, not the page's primary heading. Each page now has only ONE H1 (in the main content area)

**Result:** Clean heading hierarchy - only content H1s (Manifesto title, Article titles) serve as page headings

### 2. Added Open Graph & Twitter Card Metadata ✅
**Files Modified:** `src/app/layout.tsx`

**Added:**
```typescript
- metadataBase: new URL("https://exponentialbuilder.com")
- openGraph: { type, locale, url, siteName, title, description, images }
- twitter: { card, title, description, images, creator }
- robots: { index, follow, googleBot settings }
```

**Action Required:**
- Create `/public/og-image.png` (1200x630px) for social sharing
- Update `twitter.creator` with your actual Twitter handle

**Result:** Proper social media unfurling on X/Twitter, LinkedIn, Facebook, Slack, etc.

### 3. Added Canonical URLs ✅
**Files Modified:** `src/app/layout.tsx`

**Added:**
```typescript
- metadataBase: new URL("https://exponentialbuilder.com")
- alternates: { canonical: "/" }
```

**Result:** Prevents duplicate content issues, tells search engines the preferred URL

### 4. Improved Semantic HTML Structure ✅
**Files Modified:** 
- `src/app/page.tsx` - Added `<nav>` wrapper with `aria-label="Main navigation"`
- `src/components/article-content.tsx` - Changed root `<div>` to `<article>`

**Result:** 
- Better document outline for screen readers
- Clearer semantic meaning for search engines
- Improved accessibility tree

## Accessibility Verification ✅

All accessibility checks passed:
- ✅ All images have descriptive `alt` attributes
- ✅ Social links have `aria-label` attributes
- ✅ Form inputs have proper `type` and `required` attributes
- ✅ Navigation has `aria-label` for context
- ✅ No heading level skips in document outline
- ✅ Semantic HTML elements used (`<aside>`, `<main>`, `<nav>`, `<article>`)

## Testing Recommendations

### Before Launch:
1. **Create social sharing image:** `/public/og-image.png` (1200x630px)
2. **Update Twitter handle** in `layout.tsx` metadata
3. **Test Open Graph tags** using:
   - https://www.opengraph.xyz/
   - https://cards-dev.twitter.com/validator
4. **Validate HTML** using: https://validator.w3.org/
5. **Test with screen reader** (VoiceOver on Mac, NVDA on Windows)
6. **Check Google Search Console** after deployment for crawl errors

### Optional Enhancements (Not Critical):
- Add JSON-LD structured data for Person and Article schemas
- Create `sitemap.xml` for better crawling
- Add `robots.txt` if you need to block specific paths
- Consider adding skip-to-content link for keyboard users

## Summary

**Critical Issues Fixed:** 4/4
**Accessibility:** All checks passed
**SEO Foundation:** Strong
**Action Items:** 2 (create OG image, update Twitter handle)

The site now has a solid SEO and accessibility foundation appropriate for a personal writing site.
