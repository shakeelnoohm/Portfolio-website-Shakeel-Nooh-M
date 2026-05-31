# Shakeel Nooh M - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and TailwindCSS. Features smooth animations, glass morphism effects, and a clean dark theme.

![Portfolio Screenshot](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwindcss)

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Glass Morphism**: Modern frosted glass effects throughout the UI
- **Dark Theme**: Elegant dark mode with cyan-to-purple gradient accents
- **Project Showcase**: Interactive project cards with filtering by category
- **Contact Section**: Direct contact information and social links
- **Fast Performance**: Built with Vite for optimal build and dev performance

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite 5

## Sections

1. **Hero**: Introduction with animated gradient text and social links
2. **About**: Skills grid with categorized expertise and stats
3. **Projects**: Filterable project showcase with detailed descriptions
4. **Contact**: Contact information and social media links
5. **Footer**: Social links and copyright

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shakeelnoohm/Portfolio-website-Shakeel-Nooh-M.git
cd Portfolio-website-Shakeel-Nooh-M
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
Portfolio-website-Shakeel-Nooh-M/
├── public/
│   └── favicon.svg          # Custom SN logo favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation with mobile menu
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About and skills
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Contact.tsx      # Contact section
│   │   ├── Footer.tsx       # Footer
│   │   └── Loader.tsx       # Loading animation
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles and glass effects
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies
```

## Customization

### Colors
The main gradient is defined in `src/index.css`:
```css
.gradient-text {
  background: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6, #a855f7);
}
```

### Content
Update your information in the respective component files:
- `Hero.tsx`: Name, description, tech stack
- `About.tsx`: Skills, experience stats
- `Projects.tsx`: Your projects list
- `Contact.tsx`: Email, social links

## Deployment

### Netlify
The project includes `netlify.toml` for easy deployment:
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

## Links

- **GitHub**: [https://github.com/shakeelnoohm](https://github.com/shakeelnoohm)
- **LinkedIn**: [https://www.linkedin.com/in/shakeelnoohm/](https://www.linkedin.com/in/shakeelnoohm/)

## License

This project is licensed under the MIT License.

---

Made with and code by Shakeel Nooh M