# 🚀 Deployment Guide

## GitHub Pages Deployment

### Prerequisites
- GitHub account
- Git installed on your computer

### Steps

1. **Create a new repository on GitHub**
   - Go to [github.com/new](https://github.com/new)
   - Name it: `portfolio` (or any name you prefer)
   - Add description: "My Full Stack Developer Portfolio"
   - Choose Public (so it's accessible)
   - Click "Create repository"

2. **Initialize Git locally**
   ```bash
   cd e:\Practice
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Under "Build and deployment"
   - Source: Deploy from branch
   - Branch: main / root
   - Save
   - Your site is now live at: `https://YOUR_USERNAME.github.io/portfolio`

4. **Update GitHub profile**
   - Add portfolio link to your GitHub profile bio
   - Pin the repository

---

## Vercel Deployment

### Prerequisites
- GitHub account with the portfolio repository
- Vercel account (sign up at [vercel.com](https://vercel.com))

### Steps

1. **Sign in to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign up"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub

2. **Import the project**
   - Click "New Project"
   - Click "Import Git Repository"
   - Find and select your `portfolio` repository
   - Click "Import"

3. **Deploy**
   - Framework: Other
   - Root Directory: ./
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site is live at: `https://portfolio-[random].vercel.app`

4. **Custom Domain (Optional)**
   - In Vercel Dashboard → Settings → Domains
   - Add your custom domain
   - Follow DNS configuration steps
   - Your site now has a professional URL

5. **Link to LinkedIn**
   - Add Vercel URL to LinkedIn profile
   - Add to resume/CV

---

## Netlify Deployment (Alternative)

### Steps

1. **Sign up at [netlify.com](https://netlify.com)**
2. **Drag and drop** the entire folder
3. **Or** connect your GitHub repository
4. Site deployed instantly at: `https://[random-name].netlify.app`

---

## Custom Domain

### For GitHub Pages
1. Vercel Settings → Domains
2. Add your domain (e.g., amarnathyadav.com)
3. Follow DNS setup instructions
4. Wait 24-48 hours for DNS propagation

### Registrars to use
- Namecheap
- GoDaddy
- Google Domains
- Hostinger

---

## Performance Optimization

### Before Deploying
1. **Optimize profile image**
   - Use TinyPNG.com or similar
   - Target: < 200KB
   - Resolution: 600x600px minimum

2. **Test responsiveness**
   - Use Chrome DevTools (F12)
   - Test on: Mobile, Tablet, Desktop
   - Check all sections on each device

3. **Lighthouse Check**
   - Open DevTools (F12)
   - Go to "Lighthouse"
   - Run audit
   - Target score: 90+

4. **Browser Testing**
   - Chrome ✓
   - Firefox ✓
   - Safari ✓
   - Edge ✓

---

## Post-Deployment Checklist

- [ ] Test all links work
- [ ] Contact form opens email correctly
- [ ] Social icons link to correct profiles
- [ ] Smooth scrolling works
- [ ] Mobile menu functions
- [ ] Custom cursor works (desktop)
- [ ] Project links are correct
- [ ] Image loading is fast
- [ ] No console errors (F12)
- [ ] Share link with 5 people for feedback

---

## Monitoring

### GitHub Pages
- Dashboard automatically updates on push
- Check Actions tab for build status
- Live at: `https://YOUR_USERNAME.github.io/portfolio`

### Vercel
- Automatic deployments on every push
- Check Deployments tab for history
- Performance analytics included
- Live at: Vercel-generated URL

---

## Update Website

### After Deployment
To make changes:

1. Edit `index.html` locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update: [describe change]"
   git push
   ```
3. Changes live in 30 seconds - 3 minutes (depending on platform)

### Example Changes
- Update project description
- Add new project
- Change accent color
- Update social links
- Modify about text

---

## Troubleshooting

### Page shows 404
- Check repository is public
- Verify index.html is in root folder
- Wait 5 minutes after push

### Images not loading
- Verify profile.jpg is in same folder
- Use correct relative path (./profile.jpg)
- Check file size < 500KB

### Styling looks broken
- Hard refresh: Ctrl+Shift+R (Windows)
- Clear browser cache
- Check HTML has no syntax errors

### Custom cursor not working
- Only works on desktop (not mobile)
- Some browsers need to enable JavaScript
- Check browser supports CSS animations

---

## Security Notes

- No sensitive data in HTML
- Email is public (it's intentional)
- No backend = no server vulnerabilities
- HTTPS enabled automatically (GitHub Pages & Vercel)

---

## Next Steps

1. ✅ Deploy to GitHub Pages
2. ✅ Deploy to Vercel  
3. ✅ Update LinkedIn with portfolio link
4. ✅ Add to resume/CV
5. ✅ Share on Twitter/social media
6. ✅ Keep portfolio updated with new projects

**Good luck with your portfolio! 🚀**
