# Paralucent Font Setup

This project uses the **Paralucent** font family. The CSS is configured to use Paralucent with Inter as a fallback.

## To Use Paralucent Fonts:

1. **Obtain the font files** (Paralucent-Light.woff2, Paralucent-Regular.woff2, Paralucent-Bold.woff2)

2. **Create the fonts directory:**
   ```bash
   mkdir -p public/fonts
   ```

3. **Place font files in `/public/fonts/`:**
   - `Paralucent-Light.woff2` (or `.woff`)
   - `Paralucent-Regular.woff2` (or `.woff`)
   - `Paralucent-Bold.woff2` (or `.woff`)

4. **The CSS is already configured** in `src/index.css` with `@font-face` declarations.

## Font Weights Used:

- **Light (300)**: Subtle text, muted content
- **Regular (400)**: Body text, navigation links
- **Bold (700)**: Headings, emphasis

## Fallback:

If Paralucent fonts are not available, the site will use **Inter** (loaded from Google Fonts) as a fallback, which has a similar geometric sans-serif aesthetic.

