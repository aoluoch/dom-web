# Institute Components

This folder contains React TypeScript components for the Institute section, rebuilt with modern practices and Tailwind CSS.

## Components

### Main Components
- **Strategic.tsx** - School of Strategic Planning registration form
- **SchoolPurpose.tsx** - School of Purpose registration form  
- **Deliverance.tsx** - School of Deliverance registration form
- **Prophets.tsx** - School of Prophets registration form

### Reusable Components
- **FormComponents.tsx** - Shared form components and utilities
  - `FormField` - Input field component
  - `SelectField` - Select dropdown component
  - `TextAreaField` - Textarea component
  - `ContactInfo` - Contact information display
  - `SubmitButton` - Form submit button
  - `countryOptions` - Country data array

## Features

- **TypeScript** - Full type safety with interfaces
- **Tailwind CSS** - Modern, responsive styling
- **React Hooks** - State management with useState
- **Reusable Components** - DRY principle with shared form components
- **Responsive Design** - Mobile-first approach with grid layouts
- **Form Validation** - Built-in HTML5 validation
- **Conditional Rendering** - Dynamic form fields based on user input

## Usage

```tsx
import { Strategic, SchoolPurpose, Deliverance, Prophets } from './Institute';

// Use any of the components
<Strategic />
<SchoolPurpose />
<Deliverance />
<Prophets />
```

## Form Data Handling

Each component includes:
- Form state management with React hooks
- Input change handlers
- Form submission handling
- Conditional field visibility
- Type-safe form data interfaces

## Styling

- Uses Tailwind CSS utility classes
- Responsive grid layouts
- Consistent spacing and typography
- Modern card-based design
- Hover and focus states
- Mobile-responsive design

## Dependencies

- React 18+
- TypeScript
- Tailwind CSS
- No external form libraries required
