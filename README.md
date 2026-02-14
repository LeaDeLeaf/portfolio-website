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
```
