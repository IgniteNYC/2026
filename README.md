# Microsoft Ignite NYC 2026 - Conference Website

A professional, responsive HTML/CSS/JavaScript website for the Microsoft Ignite NYC 2026 one-day technology conference (November 16, 2026).

## Overview

Static website for Ignite NYC 2026. Edit `index.html` and add plain CSS, JavaScript, and other public assets in the repository root. No compilation or dependency installation is required. Use relative asset URLs so they work under the `/2026/` project path.

This website serves as the main hub for Microsoft Ignite NYC 2026, featuring:
- **Global Ignite Sessions** - Latest cloud, AI, and enterprise innovations
- **.NET Conf 2026 Content** - Modern .NET development and ecosystem updates
- **NYC Location** - Heart of Manhattan, combining Ignite branding with NYC imagery
- **One-Day Event** - November 16, 2026

## Features

✨ **Modern Design**
- Responsive design (mobile-first approach)
- Professional card-based layouts
- Smooth animations and transitions
- Ignite brand colors (Blue #0078D4, Purple #7928CA)
- NYC-inspired visual elements

🎯 **Core Sections**
1. **Navigation** - Sticky navbar with mobile toggle
2. **Hero** - Eye-catching event announcement with NYC + Ignite branding
3. **About** - Event details and key features
4. **Stats** - Quick event highlights with NYC skyline SVG
5. **Sessions** - Four conference tracks (Global Ignite, .NET Conf, AI, Cloud)
6. **Speakers** - Featured speaker profiles
7. **Schedule** - Full-day timeline (8 AM - 7 PM)
8. **Location** - Venue details, transit, accessibility info
9. **Registration** - Contact form with validation
10. **Footer** - Links, social media, branding

🔧 **Technology Stack**
- Pure HTML5 (no frameworks)
- CSS3 with CSS variables for theming
- Vanilla JavaScript for interactivity
- Font Awesome icons (CDN)
- No build tools or compilation needed

## File Structure

```
project-root/
├── index.html           # Main HTML file
├── styles.css          # All styling
├── script.js           # All JavaScript functionality
├── README.md           # This file
├── IMAGE-PLACEHOLDERS.md # Image specifications and requirements
└── images/             # Directory for all images
    ├── hero-background.jpg
    ├── ignite-nyc-badge.png
    ├── about-banner.jpg
    ├── track-global-ignite.jpg
    ├── track-dotnet-conf.jpg
    ├── track-ai-innovation.jpg
    ├── track-cloud-infrastructure.jpg
    ├── venue-location.jpg
    ├── venue-interior.jpg
    ├── nyc-skyline-accent.png
    ├── microsoft-ignite-logo.png
    ├── dotnet-conf-logo.png
    └── speakers/
        ├── speaker-1.jpg
        ├── speaker-2.jpg
        └── speaker-3.jpg
```

## Getting Started

### 1. Generate Images
See `IMAGE-PLACEHOLDERS.md` for detailed specifications:
- **15 images** needed in total
- Specific dimensions and aspect ratios provided
- Alt text descriptions included
- Directory structure documented

**Copy generated images to the `images/` folder following the structure above.**

### 2. Local Preview
Run a local web server from the repository root:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/> in your browser.

### 3. GitHub Pages Deployment

1. In **Settings → Pages → Build and deployment**, select **GitHub Actions**
   as the source (requires repository administrator access).
2. Merge site changes into `main`. The **Deploy static site to GitHub Pages**
   workflow publishes the repository directly, with no build step.
3. Visit <https://ignitenyc.github.io/2026/> after the deployment succeeds.

The workflow also supports manual runs from the **Actions** tab on `main`.
Pull requests do not deploy. Everything in the repository root except hidden
files and directories is included in the published artifact, so keep private
files out of the repository.

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0078D4;      /* Microsoft Blue */
    --secondary-color: #7928CA;    /* Tech Purple */
    --accent-color: #FFD700;       /* NYC Yellow */
    --dark-color: #1F2937;
    --light-color: #F8F9FA;
}
```

### Event Details
Update these in `index.html`:
- Event date: "November 16, 2026"
- Venue address
- Session titles and descriptions
- Speaker names and titles
- Timeline/schedule items

### Links
- Global Ignite: https://ignite.microsoft.com
- .NET Conf: https://www.dotnetconf.net
- Social media links in footer

## JavaScript Features

✅ **Mobile Menu Toggle** - Responsive hamburger navigation
✅ **Smooth Scrolling** - Anchor link navigation
✅ **Form Validation** - Registration form with email validation
✅ **Notifications** - Toast-style alert system
✅ **Animations** - Intersection Observer for scroll animations
✅ **Parallax** - Subtle background parallax effect
✅ **Keyboard Navigation** - ESC to close menu
✅ **Performance** - Optimized animations with debouncing

## Accessibility

✓ Semantic HTML5 structure
✓ Proper heading hierarchy (h1, h2, h3)
✓ Alt text on all images
✓ ARIA labels where needed
✓ Keyboard navigation support
✓ Focus management
✓ Color contrast compliance
✓ Respects `prefers-reduced-motion`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)
- IE 11 not supported (uses modern CSS/JS features)

## Performance

- No external CSS frameworks (lightweight)
- Minimal JavaScript (vanilla, no jQuery by default)
- Optimized images (compress before deploy)
- CSS Grid and Flexbox for layouts
- Lazy loading ready for images
- Page load typically < 2 seconds

## Registration Form

The registration form collects:
- Full Name (required)
- Email (required, validated)
- Phone (optional)
- Primary Interest (required) - dropdown selection

Form data can be:
1. Sent to your backend API (modify form submission in `script.js`)
2. Stored locally (modify form handler)
3. Integrated with services like Formspree, Netlify Forms, etc.

Currently logs to browser console for demo purposes.

## SEO

Meta tags included:
- Title: "Microsoft Ignite NYC 2026"
- Description: Event overview
- Viewport: Responsive design
- Theme color: Brand blue

For production, consider:
- Adding Open Graph tags
- Adding Twitter Card tags
- JSON-LD structured data
- Sitemap.xml
- robots.txt

## Social Media

Footer includes links to:
- Twitter (@microsoft)
- LinkedIn (Microsoft company page)
- YouTube (Microsoft channel)
- Instagram (@microsoft)

Update links as needed for your event accounts.

## Troubleshooting

### Images not showing
- Ensure images are in `images/` folder with correct filenames
- Check browser console for 404 errors
- Verify file extensions (.jpg, .png)

### Mobile menu not working
- Check browser console for JavaScript errors
- Ensure `script.js` is loaded
- Test in different browser

### Form not submitting
- Check browser console for errors
- Verify email format validation
- Ensure all required fields are filled

### Styling issues
- Clear browser cache (Ctrl+Shift+Del)
- Check for CSS syntax errors
- Verify `styles.css` is loaded

## License

Microsoft Ignite NYC 2026 - Event website
© 2026 Microsoft Corporation

## Support

For questions or issues with this website:
1. Check IMAGE-PLACEHOLDERS.md for image requirements
2. Review browser console for error messages
3. Verify all files are present in correct locations
4. Test in different browser/device

## Next Steps

1. ✅ HTML structure created
2. ✅ CSS styling completed
3. ✅ JavaScript functionality implemented
4. ⏭️ Generate and add images (see IMAGE-PLACEHOLDERS.md)
5. ⏭️ Update real content (speakers, schedule details)
6. ⏭️ Setup form backend
7. ⏭️ Deploy to production
8. ⏭️ Set up analytics (Google Analytics, etc.)

---

**Version:** 1.0
**Last Updated:** October 14, 2026
**Created for:** Microsoft Ignite NYC 2026