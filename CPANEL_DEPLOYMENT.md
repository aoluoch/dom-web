# cPanel Deployment Guide for DOM International React App

This guide provides step-by-step instructions for deploying your Vite React application to cPanel hosting.

## Prerequisites

- cPanel hosting account with Node.js support (optional, for building)
- FTP/SFTP access or cPanel File Manager
- Domain configured in cPanel

## Quick Fix for MIME Type Error

The error "Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'text/html'" has been resolved with:

1. ✅ **Updated Vite config** - Changed from relative paths (`base: "./"`) to absolute paths (`base: "/"`)
2. ✅ **Added .htaccess file** - Ensures proper MIME types and SPA routing

## Deployment Steps

### Step 1: Build the Application Locally

```bash
# Install dependencies (if not already done)
npm install

# Run the build command
npm run build
```

This creates a `dist` folder with all the production files.

### Step 2: Upload Files to cPanel

#### Option A: Using cPanel File Manager
1. Log into your cPanel
2. Open **File Manager**
3. Navigate to `public_html` (or your domain's document root)
4. Upload all contents from the `dist` folder to `public_html`
5. Upload the `.htaccess` file to `public_html`

#### Option B: Using FTP/SFTP
1. Connect to your hosting via FTP/SFTP
2. Navigate to `public_html` directory
3. Upload all files from `dist` folder
4. Upload the `.htaccess` file

### Step 3: Set Environment Variables (if needed)

If your app uses Contentful or other APIs:

1. In cPanel, go to **Node.js App** (if available) or create a `.env` file
2. Add your environment variables:
   ```
   VITE_CONTENTFUL_SPACE_ID=your_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```

### Step 4: Configure Domain (if using subdirectory)

If deploying to a subdirectory (e.g., `yourdomain.com/app`):

1. Update `vite.config.ts`:
   ```typescript
   base: "/app/",  // Replace "app" with your subdirectory name
   ```
2. Rebuild: `npm run build`
3. Upload the new files

## File Structure After Deployment

Your `public_html` should look like this:
```
public_html/
├── .htaccess
├── index.html
├── favicon.svg
├── site.webmanifest
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    └── logo@2x2-[hash].png
```

## Troubleshooting

### 1. Still Getting MIME Type Error?
- Ensure `.htaccess` file is uploaded and in the root directory
- Check if your hosting provider supports `.htaccess` files
- Contact your hosting provider to enable mod_rewrite

### 2. 404 Errors on Page Refresh?
- Verify `.htaccess` file contains the React Router rewrite rules
- Ensure mod_rewrite is enabled on your server

### 3. Assets Not Loading?
- Check if files are uploaded to the correct directory
- Verify file permissions (should be 644 for files, 755 for directories)
- Clear browser cache

### 4. Environment Variables Not Working?
- Ensure variables start with `VITE_`
- Rebuild the application after adding environment variables
- Check if your hosting supports environment variables

## Testing Your Deployment

1. Visit your domain in a web browser
2. Check browser developer tools for any console errors
3. Test navigation between different pages
4. Verify all images and assets load correctly
5. Test on mobile devices

## Performance Optimization

The deployment includes:
- ✅ Gzip compression
- ✅ Asset caching (1 year)
- ✅ Security headers
- ✅ Minified JavaScript and CSS
- ✅ Optimized images

## Security Features

- ✅ X-Frame-Options: DENY
- ✅ X-XSS-Protection enabled
- ✅ Content-Type-Options: nosniff
- ✅ Referrer-Policy configured
- ✅ Hidden sensitive files (.env, .htaccess, etc.)

## Support

If you continue to experience issues:
1. Check your hosting provider's documentation for React/SPA deployment
2. Verify Node.js and npm versions if building on server
3. Contact your hosting provider's support team
4. Consider using alternative deployment methods (Netlify, Vercel)

## Alternative: Direct Server Build (Advanced)

If your cPanel supports Node.js:
1. Upload source code to cPanel
2. Use cPanel's Node.js interface to install dependencies
3. Run build command on server
4. Point domain to the `dist` directory
