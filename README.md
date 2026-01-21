# EVA Website

A professional, modern informational website for EVA (Energy Vehicle Alliance) - a platform that connects electric vehicle drivers with charging station hosts.

## Features

- **Modern Design**: Ultra-professional, minimalist design with premium animations
- **Fully Responsive**: Perfect on mobile, tablet, and desktop
- **Smooth Animations**: 60fps animations using Framer Motion
- **Comprehensive Content**: All sections including detailed FAQ, features, and services
- **SEO Optimized**: Proper meta tags and structured data
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Hosting**: Netlify

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Netlify

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Netlify will automatically detect Next.js and use the configuration in `netlify.toml`
4. The site will be deployed automatically on every push to the main branch

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About/Who We Are section
│   ├── Services.tsx        # Services section
│   ├── Features.tsx        # Detailed features showcase
│   ├── HowItWorks.tsx      # How it works section
│   ├── Benefits.tsx        # Benefits section
│   ├── FAQ.tsx             # FAQ section with accordion
│   ├── Technology.tsx      # Technology/Partners section
│   ├── CTA.tsx             # Call to action section
│   └── Footer.tsx          # Footer component
├── netlify.toml            # Netlify configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Brand Colors

- **Brand Green**: `#00FF0A`
- **Brand Blue**: `#0094F7`

## Customization

All content is contained within the component files. To customize:

- **Text Content**: Edit the component files in `components/`
- **Colors**: Modify `tailwind.config.ts` and `app/globals.css`
- **Animations**: Adjust Framer Motion animations in component files
- **Styling**: Update Tailwind classes or add custom CSS in `globals.css`

## License

© 2024 EVA (Energy Vehicle Alliance). All rights reserved.

