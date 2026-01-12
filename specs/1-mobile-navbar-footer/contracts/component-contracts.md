# Component Contracts: Mobile-First Responsive Navbar and Footer

## Overview
This document defines the interface contracts for the new navbar and footer components.

## Navbar Component Contract

### Component Name
`Navbar`

### Purpose
Provide responsive navigation with mobile-first design approach for Udaysha's Pret website.

### Interface
```typescript
interface NavbarProps {
  // No props required - component is self-contained
}

interface NavbarState {
  mobileMenuOpen: boolean;
  currentRoute: string;
}
```

### Expected Behavior
- On mobile screens: Display brand name and hamburger icon
- On hamburger click: Show full-width vertical menu with stacked links
- On desktop screens: Display horizontal navigation with brand on left and links on right
- All navigation links must be tappable on mobile
- Smooth animations for mobile menu open/close

### Required Links
- Home: `/`
- Pret Collection: `/products`
- Collections: `/collections`
- About: `/about`
- Contact: `/contact`

### Styling Requirements
- Use only black, white, and gray colors
- Clean, fashion-grade, minimal aesthetic
- Responsive design using Tailwind CSS

## Footer Component Contract

### Component Name
`Footer`

### Purpose
Provide comprehensive footer with brand information, navigation links, and social media connections.

### Interface
```typescript
interface FooterProps {
  // No props required - component is self-contained
}

interface FooterState {
  brandInfo: {
    name: string;
    tagline: string;
  };
  navigationLinks: Array<{
    label: string;
    href: string;
  }>;
  socialLinks: Array<{
    label: string;
    href: string;
  }>;
}
```

### Expected Behavior
- Display consistently on all pages
- Contain three distinct sections
- All links must be functional
- Responsive design that works on all screen sizes

### Required Sections
1. Brand Section:
   - Brand name: "Udaysha's Pret"
   - Short neutral fashion brand line

2. Navigation Section:
   - Same links as navbar: Home, Pret Collection, Collections, About, Contact

3. Social Media Section:
   - Facebook link with placeholder: https://facebook.com/
   - Instagram link with placeholder: https://instagram.com/

### Styling Requirements
- Either black background with white text OR white background with black text
- Thin lines and minimal spacing
- Fashion-brand feel
- Use only Tailwind CSS
- No additional colors beyond black, white, and gray

## Integration Contract

### Root Layout Integration
- Navbar must be integrated into the root layout (app/layout.tsx)
- Footer must be integrated into the root layout (app/layout.tsx)
- Both components must wrap the children content appropriately
- Must not interfere with existing page content or functionality

## Responsive Behavior Contract

### Breakpoints
- Mobile: Up to `md` breakpoint (768px)
- Desktop: From `md` breakpoint onwards

### Mobile Behavior
- Full-width header with brand name and hamburger icon
- Hamburger menu reveals vertical navigation
- All links stacked vertically
- Close button or overlay to close menu

### Desktop Behavior
- Horizontal navigation layout
- Brand name positioned on left
- Navigation links positioned on right
- All links displayed inline