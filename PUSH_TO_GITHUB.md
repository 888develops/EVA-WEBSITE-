# How to Push Your Code to GitHub

Your repository is set up! Now you just need to authenticate to push your code.

## Quick Method: Use GitHub Desktop (Easiest!)

1. **Download GitHub Desktop**: [desktop.github.com](https://desktop.github.com)
2. **Install and sign in** with your GitHub account
3. **File** → **Add Local Repository**
4. **Select your project folder**: `/Users/gh888/Documents/app/EVA/EVA website`
5. **Click "Publish repository"** in GitHub Desktop
6. **Done!** Your code will be pushed to GitHub

---

## Alternative: Use Personal Access Token

### Step 1: Create a Token on GitHub

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: "EVA Website"
4. Check the **"repo"** checkbox (this gives full repository access)
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Push Your Code

Run this command:
```bash
git push -u origin main
```

When prompted:
- **Username**: Enter your GitHub username (`888develops`)
- **Password**: Paste the token you just copied (NOT your GitHub password)

---

## Your Repository is Ready!

Your repository URL is:
```
https://github.com/888develops/EVA-WEBSITE-
```

Once you push, you can:
1. View your code on GitHub
2. Connect it to Netlify for automatic deployments
3. Share it with others

---

## Next Step: Deploy to Netlify

After your code is on GitHub:
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select your `EVA-WEBSITE-` repository
5. Click "Deploy site"

That's it! 🚀



