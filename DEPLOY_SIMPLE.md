# Simple Deployment Options for EVA Website

## Option 1: Netlify Drag & Drop (Easiest - No Git Required!)

### Step 1: Build Your Site
Run this command in your terminal:
```bash
npm run build
```

### Step 2: Create Deployment Package
After building, you need to create a deployable folder. Run:
```bash
npm run build
# The .next folder will be created
```

### Step 3: Deploy
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Simply drag and drop your entire project folder onto the page
3. Wait for it to deploy (takes 1-2 minutes)
4. Get your live URL!

**Note**: This creates a one-time deployment. For automatic updates, use Git method.

---

## Option 2: Netlify CLI (Command Line - No Git Required)

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login
```bash
netlify login
```
This opens your browser to authenticate.

### Step 3: Deploy
```bash
# Build first
npm run build

# Deploy to production
netlify deploy --prod
```

Or test with a draft first:
```bash
netlify deploy  # Creates a draft URL
netlify deploy --prod  # Deploys to production
```

---

## Option 3: Other Hosting Platforms

### Vercel (Made by Next.js creators)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login
3. Click "Add New Project"
4. Import from Git OR drag & drop
5. Auto-detects Next.js and deploys!

### GitHub Pages (Free, but requires static export)
- Requires converting to static site
- Free hosting
- Good for simple sites

### Cloudflare Pages (Free)
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect Git repository
3. Auto-builds and deploys
4. Free SSL and CDN included

### Railway
1. Go to [railway.app](https://railway.app)
2. Connect Git or upload
3. Auto-detects and deploys
4. Free tier available

---

## Recommended: Netlify Drag & Drop

**Why it's easiest:**
- ✅ No Git required
- ✅ No command line needed (just one build command)
- ✅ Takes 2 minutes
- ✅ Free hosting
- ✅ Free SSL certificate
- ✅ Custom domain support

**Steps:**
1. Run `npm run build` in terminal
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag your project folder
4. Done! 🎉

---

## Which Should You Choose?

- **Want the easiest?** → Netlify Drag & Drop
- **Want automatic updates?** → Git + Netlify (connect GitHub)
- **Want command line control?** → Netlify CLI
- **Want Next.js optimized?** → Vercel (made by Next.js team)

All options are free to start! 🚀

