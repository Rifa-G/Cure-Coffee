# CURE COFFEE Website

A fully responsive React website for CURE Coffee - "Coffee As It Should Be."

## 🚀 Quick Start

### Prerequisites
- Bun (already installed)

### Installation & Development

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Start development server:**
   ```bash
   bun run dev
   ```
   The website will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   bun run build
   ```

4. **Preview production build:**
   ```bash
   bun run preview
   ```

5. **Lint code:**
   ```bash
   bun lint
   ```

## 🎨 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern React + TypeScript** - Built with latest web technologies
- **Helvetica Neue Font** - Premium typography throughout
- **Clean Architecture** - Well-organized components and CSS
- **Shopify Ready** - Prepared for e-commerce integration
- **Email Integration** - Contact forms link to business email

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation with logo and cart
│   ├── Header.css
│   ├── HeroSection.tsx     # Main landing section with bottle image
│   ├── HeroSection.css
│   ├── AboutSection.tsx    # James's message and signature
│   ├── AboutSection.css
│   ├── Footer.tsx          # Company logo footer
│   └── Footer.css
├── App.tsx                 # Main app component
├── main.tsx               # React entry point
└── index.css              # Global styles

public/
└── assets/                # SVG logos and images
    ├── curecoffee_logo.svg
    ├── curebottle.svg
    ├── shoppingcart.svg
    ├── james.svg
    └── curetanlogo.svg
```

## 🎯 Design Specifications

- **Colors:**
  - Primary Brown: `#3E342F`
  - Light Cream: `#FAF4ED`
  - Background Cream: `#FAF3EE`
  - About Section: `#E7DBC7`
  - Text Brown: `#3F352F`

- **Typography:** Helvetica Neue Medium throughout
- **Layout:** Mobile-first responsive design
- **Components:** Clean, scalable architecture

## 📧 Contact Integration

- **About Button:** Scrolls to James's message section
- **Contact Button:** Opens email to `Jameswoodmanv@gmail.com`
- **Reach Out Button:** Opens email to `Jameswoodmanv@gmail.com`

## 🛒 E-commerce Ready

The website is prepared for Shopify integration:
- Shop buttons ready for product catalog
- Shopping cart button prepared for checkout
- Clean product-focused design

---

**Built with ❤️ for CURE Coffee - 5 Ingredients. No BS.** 