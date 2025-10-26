# Design Guidelines for Safar Karo - Cab Booking Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern transportation platforms like Uber, Savaari.com, and Ola, combined with travel booking interfaces like MakeMyTrip for a polished, trustworthy aesthetic.

## Color Palette
- **Primary**: Deep Blue (#002B5B) - Headers, navigation, key sections
- **Accent**: Golden Yellow (#F9C425) - CTAs, highlights, interactive elements
- **Neutral**: White (#FFFFFF), Light Gray (#F5F7FA) for backgrounds
- **Text**: Dark blue for headings, charcoal gray (#333333) for body text

## Typography System
**Font Families**: 
- Primary: "Inter" for clean, modern readability
- Fallback: "Poppins" for headings if needed

**Hierarchy**:
- Hero Heading: text-5xl md:text-6xl, font-bold
- Section Headings: text-3xl md:text-4xl, font-semibold
- Subheadings: text-xl md:text-2xl, font-medium
- Body Text: text-base md:text-lg
- Small Text/Labels: text-sm

## Layout & Spacing System
**Tailwind Units**: Consistent use of 4, 6, 8, 12, 16, 20, 24 for spacing
- Section Padding: py-16 md:py-24 for major sections
- Container: max-w-7xl mx-auto px-6 md:px-8
- Component Gaps: gap-8 for grids, gap-4 for tighter groupings
- Card Padding: p-6 md:p-8

## Component Library

### Navigation Bar
- Fixed top navigation with backdrop blur
- Logo on left, horizontal menu center (desktop), "Book Now" CTA right
- Mobile: Hamburger menu with slide-in drawer
- Items: Airport Transfers, Outstation, Local Rental, About, Contact
- Sticky navigation with subtle shadow on scroll

### Hero Section
**Large Hero Image**: Full-width scenic travel/cab image (taxi on highway, airport scene, or city road)
- Overlay: Dark gradient (from deep blue to transparent) for text readability
- Height: min-h-[600px] md:min-h-[700px]
- Compelling tagline centered with booking form below
- Trip selector: Toggle buttons (One Way/Round Trip) with golden yellow active state
- Booking form: Grid layout with pickup location, drop location, date, time, passenger count fields
- Submit button with golden yellow background, blur backdrop

### Services Section
- 3-column grid (1 column mobile, 3 on desktop) using grid-cols-1 md:grid-cols-3
- Cards with icons (taxi, road, clock icons from Heroicons)
- Services: Airport Transfers, Outstation Cabs, Local Rentals
- Card hover: Subtle lift effect (shadow-lg transform scale-105 transition)
- Each card: Icon, title, description, "Learn More" link in golden yellow

### Fleet Display Section
- Background: Light gray (#F5F7FA)
- 3-column grid showcasing vehicle categories
- Categories: Sedan, SUV, Hatchback
- Each card: Vehicle image, category name, feature bullets, starting price
- Clean white cards with rounded corners (rounded-lg)

### Why Choose Us Section
- 4-column grid (2x2 on tablet, 1 column mobile)
- Benefits: 24/7 Support, Professional Drivers, Transparent Pricing, Clean Vehicles
- Icons from Heroicons (phone, user-group, currency-dollar, sparkles)
- Icon background: Circular golden yellow background with deep blue icons

### Contact Footer
- Deep blue (#002B5B) background with golden yellow accents
- 3-column layout: Company Info, Quick Links, Social Media
- Company logo, tagline, contact details
- Quick links: Services, About, Terms, Privacy
- Social icons: Facebook, Twitter, Instagram (Heroicons)

## Images
1. **Hero Image**: Full-width landscape image of a premium cab on a scenic highway or at an airport terminal, with warm lighting. Overlay with dark blue to transparent gradient.
2. **Fleet Images**: Three high-quality vehicle photos - Sedan (Honda City/similar), SUV (Innova/similar), Hatchback (Swift/similar), shot from 3/4 front angle on white/light background.
3. **Services Section**: Optional icon-based graphics (can use Heroicons instead of images).

## Animations & Interactions
- Framer Motion for smooth page transitions and scroll animations
- Fade-in-up animations for sections on scroll
- Stagger children animations for grid items
- Smooth hover states: Cards scale slightly, buttons darken/lighten
- Form inputs: Focus state with golden yellow border
- Navigation: Smooth slide-in for mobile menu

## Accessibility
- High contrast between deep blue backgrounds and white/yellow text
- ARIA labels for all interactive elements
- Keyboard navigation support
- Focus states clearly visible with golden yellow outline
- Semantic HTML throughout

## Responsive Breakpoints
- Mobile: Base styles (< 768px)
- Tablet: md: prefix (768px - 1024px)
- Desktop: lg: prefix (> 1024px)
- Grids collapse to single column on mobile, 2 columns on tablet, full columns on desktop