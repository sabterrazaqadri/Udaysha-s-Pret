# Data Model: Mobile-First Responsive Navbar and Footer

## 1.1 Navigation Links Structure

### Main Navigation Links
```typescript
interface NavLink {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}
```

### Navigation Links Array
```typescript
const navigationLinks: NavLink[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'pret-collection', label: 'Pret Collection', href: '/products' },
  { id: 'collections', label: 'Collections', href: '/collections' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' }
];
```

## 1.2 Social Media Links Structure

### Social Media Links
```typescript
interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon?: string; // Placeholder for icon name/class
}
```

### Social Media Links Array
```typescript
const socialLinks: SocialLink[] = [
  { id: 'facebook', label: 'Facebook', href: 'https://facebook.com/' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/' }
];
```

## 1.3 Mobile Menu State

### Mobile Menu State Interface
```typescript
interface MobileMenuState {
  isOpen: boolean;
  activeBreakpoint: 'mobile' | 'desktop';
}
```

## 1.4 Brand Information

### Brand Info Structure
```typescript
interface BrandInfo {
  name: string; // "Udaysha's Pret"
  tagline: string; // Short neutral fashion brand line
}
```

### Brand Information
```typescript
const brandInfo: BrandInfo = {
  name: "Udaysha's Pret",
  tagline: "Contemporary fashion essentials"
};
```

## 1.5 Responsive Breakpoints

### Breakpoint Configuration
```typescript
interface BreakpointConfig {
  mobile: string; // Tailwind breakpoint for mobile (e.g., 'md')
  tablet: string; // Tailwind breakpoint for tablet (e.g., 'lg')
  desktop: string; // Tailwind breakpoint for desktop (e.g., 'xl')
}
```

### Actual Breakpoint Values
```typescript
const breakpoints: BreakpointConfig = {
  mobile: 'md', // Below this is mobile view
  tablet: 'lg',
  desktop: 'xl'
};
```

## 1.6 Component State Models

### Navbar Component State
```typescript
interface NavbarState {
  mobileMenuOpen: boolean;
  currentRoute: string;
  isScrolled: boolean; // For potential sticky navbar effects
}
```

### Footer Component State
```typescript
interface FooterState {
  brandInfo: BrandInfo;
  navigationLinks: NavLink[];
  socialLinks: SocialLink[];
}
```