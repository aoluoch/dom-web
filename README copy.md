# DOM International - Frontend Application

React + TypeScript + Vite frontend application for David Owusu Ministries International website.

## Tech Stack

- **React 19.1.1** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite 7.1.2** - Fast build tool with HMR
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **React Router DOM 6.30.1** - Client-side routing
- **Contentful SDK** - Headless CMS integration
- **Lucide React** - Modern icon library

## Project Structure

```
src/
├── Pages/              # Route components
│   ├── Home.tsx       # Landing page with hero and services
│   ├── About.tsx      # Organization information
│   ├── Institute.tsx  # DOM Institute programs
│   ├── Events.tsx     # Ministry events
│   ├── Blog.tsx       # Articles and insights
│   ├── Contact.tsx    # Contact information
│   └── Membership.tsx # Community registration
├── components/         # Reusable UI components
│   ├── Institute/     # DOM Institute forms and components
│   │   ├── Strategic.tsx      # School of Strategic Planning
│   │   ├── SchoolPurpose.tsx  # School of Purpose
│   │   ├── Deliverance.tsx    # School of Deliverance
│   │   ├── Prophets.tsx       # School of Prophets
│   │   └── FormComponents.tsx # Shared form components
│   ├── Navbar.tsx     # Navigation component
│   ├── Footer.tsx     # Footer component
│   ├── Hero.tsx       # Hero section with live services
│   └── ...            # Other UI components
├── lib/               # Utilities and configurations
│   └── contentfulClient.ts # Contentful CMS client
└── assets/            # Static assets (images, icons)
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_CONTENTFUL_SPACE_ID=your_contentful_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Key Features

### 🎯 Contentful CMS Integration
- Dynamic content management for all sections
- Rich text rendering with custom components
- Optimized image delivery via Contentful CDN
- Real-time content updates without deployment

### 🌐 Global Live Services
- Multi-timezone service scheduling
- Zoom integration for live streaming
- Real-time service information display
- Global presence showcase with country flags

### 📚 DOM Institute System
- Four specialized educational programs
- Dynamic registration forms with validation
- Conditional field rendering based on user input
- Type-safe form data handling

### 🎨 Modern UI/UX
- Responsive design with Tailwind CSS
- Mobile-first approach
- Smooth animations and transitions
- Accessible components with proper ARIA labels

## Content Management

### Contentful Content Types

| Content Type | Purpose | Fields |
|-------------|---------|--------|
| `about` | Organization info | name, image, description |
| `mission` | Mission statements | title, image, description |
| `domInstitute` | Educational programs | title, description |
| `blog` | Articles & insights | title, content, author, date |
| `events` | Ministry events | title, date, location, description |
| `departments` | Ministry departments | name, description, image |

### Content Flow
1. Content creators update content in Contentful CMS
2. Website fetches content via Contentful Delivery API
3. Rich text content is rendered using `@contentful/rich-text-react-renderer`
4. Images are automatically optimized and served via Contentful CDN

## Routing System

### Main Routes
- `/` - Home page with hero and live services
- `/about` - Organization information and mission
- `/institute` - DOM Institute programs overview
- `/institute/:slug` - Individual institute program details
- `/events` - Ministry events listing
- `/events/:id` - Individual event details
- `/blog` - Articles and insights
- `/blog/:id` - Individual blog post
- `/contact` - Contact information and forms
- `/membership` - Community membership registration

### Institute Program Routes
- `/institute/school-of-strategic-planning` → Strategic Planning form
- `/institute/school-of-purpose` → Purpose Discovery form
- `/institute/school-of-deliverance` → Deliverance Ministry form
- `/institute/prophetic-school` → Prophetic Ministry form

## Development Guidelines

### Code Style
- TypeScript strict mode enabled
- ESLint configuration for React and TypeScript
- Consistent component structure and naming
- Proper error handling and loading states

### Component Architecture
- Functional components with React Hooks
- Custom hooks for data fetching and state management
- Reusable UI components in `/components`
- Page-level components in `/Pages`

### State Management
- React useState for local component state
- useEffect for side effects and data fetching
- Custom hooks for complex state logic
- No external state management library (Redux, Zustand) needed

## Performance Optimizations

- **Vite HMR** - Fast development with Hot Module Replacement
- **Code Splitting** - Automatic route-based code splitting
- **Image Optimization** - Contentful CDN with automatic optimization
- **Lazy Loading** - Components and images loaded on demand
- **TypeScript** - Compile-time error checking and optimization

## Deployment

### Build Process
```bash
npm run build
```

This creates a `dist` folder with:
- Optimized JavaScript bundles
- Minified CSS
- Optimized assets
- TypeScript compilation output

### Environment Variables
Ensure these environment variables are set in production:
- `VITE_CONTENTFUL_SPACE_ID`
- `VITE_CONTENTFUL_ACCESS_TOKEN`

## Troubleshooting

### Common Issues

1. **Contentful API Errors**
   - Verify environment variables are set correctly
   - Check Contentful space ID and access token
   - Ensure content types exist in Contentful

2. **TypeScript Errors**
   - Run `npm run build` to check for type errors
   - Ensure all imports have proper type definitions

3. **Routing Issues**
   - Check React Router configuration in `App.tsx`
   - Verify component imports and exports

## Contributing

1. Follow the existing code style and structure
2. Add TypeScript types for all new components
3. Test components across different screen sizes
4. Ensure accessibility standards are met
5. Update documentation for new features

---

Built with ❤️ for David Owusu Ministries International
