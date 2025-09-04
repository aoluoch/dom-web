# DOM International Website

Official website for **David Owusu Ministries International** - "Maximizing Potentials, Raising Leaders."

## Overview

DOM International is an interdenominational religious organization led by Apostle David Owusu (IFP), with a global presence across 15+ countries. This website serves as the central hub for ministry information, educational programs, events, and community engagement.

## Features

### 🌍 Global Ministry Platform
- **Live Services**: Daily "Grace Hour: Strictly Prophetic" sessions
- **Multi-timezone Support**: Services accessible across EAT, SAST, BST, GMT, EDT, CDT
- **Global Presence**: Active in 15+ countries including Ghana, Nigeria, UK, US, Canada, and more

### 📚 DOM Institute
- **School of Strategic Planning**: Financial and strategic planning education
- **School of Purpose**: Life purpose discovery and development
- **School of Deliverance**: Spiritual deliverance ministry training
- **School of Prophets**: Prophetic ministry development

### 🎯 Core Sections
- **Home**: Hero section with live service information and global presence
- **About**: Organization mission, values, and leadership information
- **Departments**: Various ministry departments with detailed descriptions
- **Events**: Upcoming and past ministry events
- **Blog**: Articles, teachings, and ministry insights
- **Contact**: Contact information and inquiry forms
- **Membership**: Community membership registration

## Technology Stack

- **Frontend**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.12
- **Routing**: React Router DOM 6.30.1
- **CMS**: Contentful for dynamic content management
- **Icons**: Lucide React
- **Rich Text**: Contentful Rich Text React Renderer

## Project Structure

```
DOM/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── Pages/         # Route components (Home, About, etc.)
│   │   ├── components/    # Reusable UI components
│   │   │   └── Institute/ # DOM Institute registration forms
│   │   ├── lib/          # Utilities (Contentful client)
│   │   └── assets/       # Static assets
│   ├── public/           # Public assets
│   └── package.json      # Dependencies and scripts
└── README.md            # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ or 20.x
- npm 9.x or higher
- Contentful account with API keys

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DOM
   ```

2. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the `client` directory:
   ```env
   VITE_CONTENTFUL_SPACE_ID=your_contentful_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## Available Scripts

In the `client` directory:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Content Management

The website uses **Contentful CMS** for dynamic content management:

### Content Types
- `about` - Organization information and mission
- `mission` - Mission statements and values
- `domInstitute` - Educational program details
- `blog` - Blog posts and articles
- `events` - Event listings and details
- `departments` - Ministry department information

### Content Flow
1. Content is created/updated in Contentful CMS
2. Website fetches content via Contentful API
3. Rich text content is rendered using React components
4. Images are optimized and served via Contentful CDN

## Live Services

### Grace Hour: Strictly Prophetic
- **Schedule**: Monday to Sunday
- **Times**:
  - 10:00pm EAT (East Africa Time)
  - 9:00pm SAST (South Africa Standard Time)
  - 8:00pm BST (British Summer Time)
  - 7:00pm GMT (Greenwich Mean Time)
  - 3:00pm EDT (Eastern Daylight Time)
  - 2:00pm CDT (Central Daylight Time)
- **Platform**: Zoom (Meeting ID: 3091650498, Password: DOMHOUR)

### Sunday Services
- **Morning Service**: 9:30am EAT (with timezone equivalents)
- **Evening Service**: 10:00pm EAT (with timezone equivalents)

## Global Presence

DOM International operates in:
- 🇧🇼 Botswana
- 🇨🇦 Canada
- 🇩🇪 Germany
- 🇬🇭 Ghana
- 🇮🇳 India
- 🇰🇪 Kenya
- 🇳🇬 Nigeria
- 🇸🇱 Sierra Leone
- 🇿🇦 South Africa
- 🇻🇨 St Vincent
- 🇦🇪 UAE
- 🇬🇧 United Kingdom
- 🇺🇸 United States
- 🇿🇲 Zambia
- 🇿🇼 Zimbabwe

## 🚀 Production Deployment

### Available Scripts for Production

- `npm run test:ci` - Full CI test suite (type check, lint, build)
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally

### Deployment Options

#### 1. Netlify (Recommended)
```bash
# Connect your GitHub repository to Netlify
# Netlify will automatically build and deploy
# Configuration: netlify.toml
```

#### 2. Vercel
```bash
# Connect your GitHub repository to Vercel
# Vercel will automatically build and deploy
# Configuration: vercel.json
```

#### 3. Docker
```bash
# Build and run with Docker
docker build -t dom-web .
docker run -p 80:80 dom-web

# Or use docker-compose
docker-compose up -d
```

### Environment Variables for Production

Set these in your deployment platform:
```env
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
```

### CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow:

- **Automated Testing**: Type checking, linting, building
- **Multi-Node Testing**: Tests on Node.js 18.x and 20.x
- **Security Scanning**: npm audit and Snyk vulnerability checks
- **Performance Monitoring**: Lighthouse CI integration
- **Automated Deployment**: Staging and production deployments

### Performance & Security

- **Security Headers**: CSP, HSTS, X-Frame-Options
- **Asset Optimization**: Gzip compression, cache headers
- **Performance Monitoring**: Lighthouse CI with performance budgets
- **Health Checks**: Docker health checks and monitoring endpoints

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software belonging to David Owusu Ministries International.

## Contact

- **Website**: [DOM International](https://dom-international.org)
- **Email**: Contact through website contact form
- **Zoom Services**: Meeting ID 3091650498

---

*"Maximizing Potentials, Raising Leaders" - David Owusu Ministries International*
