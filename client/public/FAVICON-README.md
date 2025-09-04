# DOM International Favicon Package

Custom favicon package created for David Owusu Ministries International website.

## Files Included

### Favicon Files
- `favicon.svg` - Main SVG favicon (32x32, scalable)
- `favicon-16x16.svg` - Optimized for 16x16 display
- `favicon-32x32.svg` - Optimized for 32x32 display
- `apple-touch-icon.svg` - iOS/Apple devices (180x180)

### Configuration Files
- `site.webmanifest` - Web App Manifest for PWA support

## Design Elements

### Color Scheme
- **Primary Blue**: `#1e40af` (DOM brand blue)
- **Secondary Blue**: `#3b82f6` (lighter blue for gradients)
- **Accent Gold**: `#fbbf24` (decorative elements)
- **White/Gray**: `#ffffff`, `#e5e7eb` (text and highlights)

### Visual Elements
- **DOM** text prominently displayed
- **"INTERNATIONAL"** or **"INT'L"** subtitle
- **Decorative crosses** in corners (religious symbolism)
- **Gradient backgrounds** for depth
- **Clean, professional typography**

## Browser Support

### Desktop Browsers
- ✅ Chrome/Chromium (SVG favicon support)
- ✅ Firefox (SVG favicon support)
- ✅ Safari (SVG favicon support)
- ✅ Edge (SVG favicon support)

### Mobile Devices
- ✅ iOS Safari (Apple Touch Icon)
- ✅ Android Chrome (Web Manifest)
- ✅ Mobile browsers (responsive SVG)

## Implementation

The favicon is implemented in `index.html` with:

```html
<!-- Favicon and App Icons -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-16x16.svg" />
<link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon-32x32.svg" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.svg" />

<!-- Web App Manifest -->
<link rel="manifest" href="/site.webmanifest" />

<!-- Theme Colors -->
<meta name="theme-color" content="#1e40af" />
<meta name="msapplication-TileColor" content="#1e40af" />
```

## PWA Features

The `site.webmanifest` enables:
- **App-like experience** when added to home screen
- **Custom app name**: "DOM International"
- **Theme colors** matching brand
- **Standalone display** mode
- **Portrait orientation** preference

## SEO Enhancements

Additional meta tags included:
- **Open Graph** tags for social media sharing
- **Twitter Card** support
- **Descriptive meta tags** for search engines
- **Keywords** for better discoverability

## File Sizes

All favicon files are SVG-based for:
- **Small file sizes** (< 2KB each)
- **Crisp display** at any resolution
- **Fast loading** times
- **Scalability** across devices

## Customization

To modify the favicon:
1. Edit the SVG files directly
2. Adjust colors in the `<defs>` gradients
3. Modify text content for different branding
4. Update `site.webmanifest` for PWA settings

## Testing

Test the favicon by:
1. Opening `http://localhost:5173` in browser
2. Checking browser tab for DOM favicon
3. Adding to home screen on mobile devices
4. Verifying in browser developer tools

---

Created for David Owusu Ministries International  
"Maximizing Potentials, Raising Leaders"
