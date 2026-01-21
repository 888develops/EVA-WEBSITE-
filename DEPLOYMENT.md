# Deploying EVA Website to Netlify

## Option 1: Deploy via Git (Recommended)

### Step 1: Push to GitHub

**First, create a repository on GitHub:**
1. Go to [github.com](https://github.com) and sign in (or create an account)
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name it (e.g., "eva-website")
4. Choose Public or Private
5. **Don't** check "Initialize with README" (we already have files)
6. Click **"Create repository"**
7. **Copy the URL** GitHub shows you (looks like: `https://github.com/YOUR_USERNAME/eva-website.git`)

**Then, connect your local project:**
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Add your GitHub repository (use the URL you copied!)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**💡 Tip:** Replace `YOUR_USERNAME` with your actual GitHub username and `YOUR_REPO_NAME` with your repository name!

**📖 See `GITHUB_SETUP.md` for detailed step-by-step instructions with screenshots.**

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your EVA website repository

### Step 3: Configure Build Settings
Netlify should auto-detect Next.js, but verify these settings:
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18 (or higher)

These are already configured in `netlify.toml`, so Netlify should pick them up automatically.

### Step 4: Deploy
1. Click "Deploy site"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at a URL like: `https://random-name-123.netlify.app`

### Step 5: Custom Domain (Optional)
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to connect your domain

---

## Option 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```
This will open your browser to authenticate.

### Step 3: Initialize and Deploy
```bash
# Initialize the site
netlify init

# Deploy to production
netlify deploy --prod
```

Or for a draft deployment first:
```bash
# Deploy to draft URL (for testing)
netlify deploy

# Once you're happy, deploy to production
netlify deploy --prod
```

---

## Option 3: Drag & Drop (Quick Test)

1. Build your site locally:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder onto the Netlify dashboard
4. Your site will be deployed!

**Note**: This method doesn't support automatic deployments. Use Git for continuous deployment.

---

## Environment Variables (If Needed)

If you need to add environment variables later:
1. Go to Site settings → Environment variables
2. Add your variables
3. Redeploy the site

---

## Automatic Deployments

Once connected via Git:
- **Automatic**: Every push to `main` branch deploys to production
- **Preview**: Pull requests get preview deployments automatically
- **Rollback**: You can rollback to any previous deployment in the Deploys tab

---

## Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure Node version is 18+ (set in `netlify.toml`)
- Make sure all dependencies are in `package.json`

### Site Not Loading
- Check that the publish directory is `.next`
- Verify the build completed successfully
- Check the Functions tab if using serverless functions

### Logo Not Showing
- Ensure `public/logo.png` is committed to git
- Check that the file path is correct (`/logo.png`)

---

## Current Configuration

Your `netlify.toml` is already configured with:
- Build command: `npm run build`
- Publish directory: `.next`
- Next.js plugin for optimal performance
- Node version: 18

You're all set! 🚀

