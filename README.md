# Camera Animation Project

A modern React application featuring smooth camera animations with GSAP and Lenis smooth scrolling.

## Features

- 🎨 Smooth camera animations with GSAP
- 🖱️ Buttery smooth scrolling with Lenis
- 📱 Responsive design with Tailwind CSS
- ⚡ Fast performance with Vite
- 🎭 Beautiful entrance animations
- 📐 Multiple scroll-triggered animation phases

## Tech Stack

- **React 19** - UI framework
- **GSAP** - Animation library
- **Lenis** - Smooth scrolling
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **FontAwesome** - Icons

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd camera
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Vite and deploy

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Manual Build

```bash
npm run build
npm run preview
```

## Animation Features

- **Entrance Animation**: Navbar, sidebar, hero text, and camera entrance
- **Scroll Phases**: Multi-phase camera movement with scaling and rotation
- **Horizontal Movement**: Camera slides left during page transitions
- **Fourth Page Animation**: Camera moves to specific position
- **Smooth Scrolling**: Professional smooth scrolling with Lenis

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- Optimized bundle splitting
- Efficient GSAP animations
- Compressed assets
- CDN-ready deployment

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
