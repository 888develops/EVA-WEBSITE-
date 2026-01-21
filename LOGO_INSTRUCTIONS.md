# How to Add Your EVA Logo

## Quick Steps

1. **Add your logo file** to the `public` folder:
   - Create a `public` folder in the root directory if it doesn't exist
   - Add your logo file (e.g., `logo.png`, `logo.svg`, or `logo.webp`)
   - Recommended formats: SVG (best for scaling) or PNG with transparent background

2. **Update the Header component** (`components/Header.tsx`):
   
   Replace the current logo placeholder (around line 55-58) with:
   
   ```tsx
   <Image
     src="/logo.png"  // or /logo.svg, /logo.webp
     alt="EVA Logo"
     width={40}
     height={40}
     className="object-contain"
   />
   ```
   
   Don't forget to import Image at the top:
   ```tsx
   import Image from 'next/image'
   ```

3. **Update the Footer component** (`components/Footer.tsx`):
   
   Replace the footer logo placeholder (around line 50-52) with:
   
   ```tsx
   <Image
     src="/logo.png"
     alt="EVA Logo"
     width={40}
     height={40}
     className="object-contain"
   />
   ```

## Example: Complete Header Logo Replacement

```tsx
// At the top of Header.tsx, add:
import Image from 'next/image'

// Replace the logo div (around line 55-58) with:
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center space-x-2 cursor-pointer"
  onClick={() => scrollToSection('#hero')}
>
  <Image
    src="/logo.png"
    alt="EVA Logo"
    width={40}
    height={40}
    className="object-contain"
  />
  <span className="font-heading font-bold text-2xl text-white">EVA</span>
</motion.div>
```

## Logo Recommendations

- **Format**: SVG preferred (scalable, small file size)
- **Size**: At least 200x200px for high-resolution displays
- **Background**: Transparent PNG/SVG works best with the gradient header
- **Colors**: Your logo should work well on the green-blue gradient background (white or light colors recommended)

## Current Logo Placeholder

Currently, the site uses a simple "E" in a rounded square as a placeholder. Once you add your logo, it will replace this placeholder in both the header and footer.

