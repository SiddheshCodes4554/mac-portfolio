# 🖥️ macOS Portfolio

A modern, interactive portfolio website that replicates the sleek macOS interface using React. Experience the familiar macOS environment right in your browser with smooth animations and intuitive interactions.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?logo=greensock&logoColor=white)](https://greensock.com/gsap/)

## ✨ Features

- **Authentic macOS UI**: Pixel-perfect recreation of macOS interface elements including windows, dock, and menu bar
- **Interactive Windows**: Draggable, resizable windows with smooth animations powered by GSAP
- **Dock Navigation**: Functional dock with app icons and hover effects
- **Responsive Design**: Optimized for all screen sizes using TailwindCSS
- **State Management**: Efficient state handling with Zustand
- **PDF Viewer**: Built-in PDF viewing capability for resume/documents using react-pdf
- **Smooth Animations**: GSAP-powered transitions and interactions

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: TailwindCSS 4.1.17
- **Animation**: GSAP 3.13.0 with React integration
- **State Management**: Zustand 5.0.8
- **Icons**: Lucide React 0.554.0
- **PDF Display**: React PDF 10.2.0
- **Date Handling**: Day.js 1.11.19
- **Utilities**: clsx, immer

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/SiddheshCodes4554/mac-portfolio.git
cd mac-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
mac-portfolio/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, and media files
│   ├── components/  # Reusable React components
│   ├── constants/   # Configuration and constant values
│   ├── hoc/         # Higher-order components
│   ├── hooks/       # Custom React hooks
│   ├── windows/     # Window component definitions
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
└── package.json     # Project dependencies
```

## 🎨 Customization

To personalize this portfolio for your use:

1. Update personal information in the constants folder
2. Replace assets (images, resume PDF) in the `src/assets` directory
3. Modify window components in `src/windows` to add your projects and content
4. Customize styling in component files or `index.css`

## 🌐 Deployment

Build the project for production:

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SiddheshCodes4554/mac-portfolio/issues).

## 👨‍💻 Developer

**Siddhesh**
- GitHub: [@SiddheshCodes4554](https://github.com/SiddheshCodes4554)

---

⭐ Star this repository if you found it helpful!
