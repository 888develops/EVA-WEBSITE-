# Quick Guide: Push to GitHub

## Method 1: GitHub Desktop (Easiest - 2 minutes)

1. **Download**: [desktop.github.com](https://desktop.github.com)
2. **Install and open** GitHub Desktop
3. **Sign in** with your GitHub account (`888develops`)
4. **File** → **Add Local Repository**
5. **Browse** to: `/Users/gh888/Documents/app/EVA/EVA website`
6. **Click "Publish repository"** button (top right)
7. **Confirm** repository name: `EVA-WEBSITE-`
8. **Click "Publish Repository"**

Done! Your code is now on GitHub.

---

## Method 2: Personal Access Token (Command Line)

### Step 1: Create Token
1. Go to: [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name: `EVA Website`
4. Check **"repo"** checkbox
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Push
Run in terminal:
```bash
cd "/Users/gh888/Documents/app/EVA/EVA website"
git push -u origin main
```

When asked:
- **Username**: `888develops`
- **Password**: Paste the token (NOT your GitHub password)

---

## After Pushing

1. Go back to Netlify
2. Refresh the page
3. The `main` branch should now appear in the dropdown
4. Click "Deploy site"

That's it! 🚀



