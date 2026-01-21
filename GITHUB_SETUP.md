# How to Set Up GitHub for Your EVA Website

## Step 1: Create a GitHub Account (if you don't have one)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Create your account

## Step 2: Create a New Repository

1. **Log in to GitHub**
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**

4. **Fill in the repository details:**
   - **Repository name**: `eva-website` (or any name you like)
   - **Description**: "EVA Energy Vehicle Alliance Website" (optional)
   - **Visibility**: Choose **Public** (free) or **Private** (if you want it private)
   - **DO NOT** check "Initialize with README" (we already have files)
   - **DO NOT** add .gitignore or license (we already have these)

5. **Click "Create repository"**

## Step 3: Get Your Repository URL

After creating the repository, GitHub will show you a page with instructions. You'll see a URL that looks like:

```
https://github.com/YOUR_USERNAME/eva-website.git
```

**This is your repository URL!**

Replace:
- `YOUR_USERNAME` = Your actual GitHub username
- `eva-website` = The repository name you chose

## Step 4: Connect Your Local Project to GitHub

Now run these commands in your terminal (in your project folder):

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit - EVA website"

# Add the GitHub repository as remote (replace with YOUR actual URL)
git remote add origin https://github.com/YOUR_USERNAME/eva-website.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## Example

If your GitHub username is `johndoe` and you named your repository `eva-website`, your command would be:

```bash
git remote add origin https://github.com/johndoe/eva-website.git
```

## Quick Visual Guide

1. **GitHub.com** → Click **"+"** → **"New repository"**
2. **Name it** (e.g., "eva-website")
3. **Click "Create repository"**
4. **Copy the URL** from the page (it will be shown to you)
5. **Use that URL** in the `git remote add origin` command

## Need Help?

- **Don't have a GitHub account?** Sign up at github.com (it's free!)
- **Can't find the repository URL?** It's on the repository page, usually shown right after you create it
- **Getting an error?** Make sure you've created the repository on GitHub first before running the `git remote add` command

## Alternative: Use GitHub Desktop (Easier!)

If you prefer a visual interface:

1. Download [GitHub Desktop](https://desktop.github.com)
2. Sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Select your project folder
5. Click "Publish repository" to create it on GitHub

This is much easier if you're not comfortable with command line!

