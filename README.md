# Portfolio Website

A modern, responsive portfolio website built with **React** and **Vite**. Fast, lightweight, and easy to customize!

## 🎨 Color Scheme

This portfolio uses the **Urban Chic** color palette:
- Primary: `#22223B` (Deep Navy)
- Secondary: `#4A4E69` (Slate Purple)
- Accent: `#9A8C98` (Dusty Mauve)
- Light Accent: `#C9ADA7` (Rose Beige)
- Lightest: `#F2E9E4` (Cream)

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for instant hot module replacement
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **Single Page Application** - Smooth navigation with React Router
- 🎨 **Modern Design** - Clean, professional aesthetic
- 🔒 **Secure** - No sensitive data exposed, proper .gitignore configuration
- 📦 **Easy to Deploy** - Ready for GitHub Pages, Vercel, or Netlify

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LeaDeLeaf/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

## 📝 Customization Guide

### 1. Personal Information

Update the following files with your information:

**Header Component** (`src/components/Header.js`):
- Change "YourName" to your actual name

**Home Page** (`src/pages/Home.js`):
- Update name, title, and description
- Modify skills in the skills section

**About Page** (`src/pages/About.js`):
- Write your personal story
- Add your background and interests

**Projects Page** (`src/pages/Projects.js`):
- Replace example projects with your actual projects
- Update GitHub and demo links

**Contact Page** (`src/pages/Contact.js`):
- Add your email address
- Update social media links
- Update location

**Footer** (`src/components/Footer.js`):
- Update social media links

### 2. Metadata

Edit `index.html`:
- Update `<title>` tag
- Update meta description
- Add your favicon

### 3. Setup EmailJS for Contact Form

Your contact form is ready to send real emails! 

**Quick setup:** See [EMAILJS-SETUP.md](EMAILJS-SETUP.md) for detailed step-by-step instructions.

**TL;DR:**
1. Sign up at [emailjs.com](https://www.emailjs.com/) (free)
2. Connect your email (Gmail, Outlook, etc.)
3. Create a template
4. Get your Service ID, Template ID, and Public Key
5. Update your `.env` file with these credentials
6. Restart dev server

**Your `.env` file is protected** - already in `.gitignore` so it won't be pushed to GitHub!



## 📂 Project Structure

```
portfolio-website/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable components
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/          # Page components
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── app.jsx         # Main App component
│   ├── app.css         # App styles
│   ├── main.js         # Entry point
│   └── index.css       # Global styles
├── .gitignore          # Git ignore file
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🎯 What to Showcase in Your Portfolio

### Essential Sections (Already Included):

1. **Home/Hero Section**
   - Brief introduction
   - Your role/title
   - Call-to-action buttons

2. **About**
   - Your background and story
   - Skills and expertise
   - What makes you unique

3. **Projects**
   - 3-6 of your best projects
   - Include: description, tech stack, links to code and demo
   - Focus on projects that solve real problems

4. **Contact**
   - Email
   - Social media links
   - Contact form (optional)

### Recommended Content to Add:

- **Resume/CV** - Add a downloadable PDF
- **Blog** - Share your knowledge (optional)
- **Testimonials** - If you have any
- **Certifications** - Display relevant certificates

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Setup EmailJS environment variables:**
   
   GitHub Pages doesn't support environment variables directly. You have two options:
   
   **Option A:** Create a `src/config.js` file (NOT recommended for public repos):
   ```javascript
   export const emailConfig = {
     serviceId: 'your_service_id',
     templateId: 'your_template_id',
     publicKey: 'your_public_key'
   }
   ```
   Then add `src/config.js` to `.gitignore`
   
   **Option B:** Use Vercel/Netlify instead (recommended - supports env variables)

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js` base URL:
```javascript
base: '/portfolio-website/'  // Replace with your repo name
```
**Recommended for EmailJS setup!**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Import your repository
4. **Add Environment Variables:**
   - In Vercel dashboard, go to Settings → Environment Variables
**Also great for EmailJS setup!**

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "Add new site" → Import from Git
4. Select your repository
5. **Add Environment Variables:**
   - In Site settings → Build & deploy → Environment
   - Add your three `VITE_EMAILJS_*` variables
6. Deploy

Your site will be live at: `https://your-portfolio.netlify.app`
5. Deploy (automatic!)

Your site will be live at: `https://your-portfolio.vercel.app`
```

5. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

Your site will be live at: `https://LeaDeLeaf.github.io/portfolio-website/`

### Deploy to Vercel (Alternative)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic!)

### Deploy to Netlify (Alternative)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "Add new site" → Import from Git
4. Select your repository and deploy

## 🔒 Security Best Practices

✅ **Already Implemented:**
- `.gitignore` properly configured
- No API keys or secrets in code
- Environment variables excluded from version control
- Production builds minified and optimized

⚠️ **Important:**
- Never commit `.env` files
- Keep dependencies updated: `npm audit`
- Use HTTPS when deploying
- Sanitize any user input if you add backend functionality

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **EmailJS** - Contact form email delivery (free tier)
- **CSS3** - Styling (no frameworks needed!)
- **JavaScript ES6+** - Modern JavaScript

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📞 Support

If you have questions or need help:
- Open an issue on GitHub
- Check the documentation for [React](https://react.dev/) and [Vite](https://vitejs.dev/)

## 📜 License

MIT License - Feel free to use this template for your own portfolio!

---

**Made with ❤️ using React and Vite**

Good luck with your portfolio! 🚀
