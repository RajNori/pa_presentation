# PaanGuru Investor Presentation Platform

A modern, responsive investment presentation platform built with Next.js, TypeScript, and Tailwind CSS for PaanGuru's $100M ethnic food business opportunity.

## 🚀 Features

-   **Responsive Design**: Mobile-first approach with full responsive support
-   **TypeScript**: Full type safety and better developer experience
-   **Tailwind CSS**: Utility-first CSS framework for rapid UI development
-   **Component-Based**: Reusable components for maintainable code
-   **Modern Layout**: Clean, professional design optimized for presentations
-   **13 Interactive Slides**: Complete investor pitch deck
-   **PDF Download**: Investor deck available for download

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata and global styles
│   ├── page.tsx            # Main landing page with hero section
│   ├── paan-guru-slide/    # Slide 1: The Opportunity
│   ├── slide-2/            # Slide 2: Market Analysis
│   ├── slide-3/            # Slide 3: Traction & Growth
│   ├── slide-4/            # Slide 4: Product Portfolio
│   ├── slide-5/            # Slide 5: Financial Performance
│   ├── slide-6/            # Slide 6: Revenue Model
│   ├── slide-7/            # Slide 7: Business Model
│   ├── slide-8/            # Slide 8: Competitive Advantage
│   ├── slide-9/            # Slide 9: Market Size
│   ├── slide-10/           # Slide 10: Product Showcase
│   ├── slide-11/           # Slide 11: Team
│   ├── slide-12/           # Slide 12: Investment Ask
│   └── slide-13/           # Slide 13: Contact & Next Steps
├── components/
│   ├── LogoWithReflection.tsx
│   ├── PaanGuruSlide.tsx
│   ├── PaanGuruSlide2.tsx
│   ├── PaanGuruSlide3.tsx
│   ├── PaanGuruSlide4.tsx
│   ├── PaanGuruSlide5.tsx
│   ├── PaanGuruSlide6.tsx
│   ├── PaanGuruSlide7.tsx
│   ├── PaanGuruSlide8.tsx
│   ├── SlideshowCard.tsx
│   └── StickySlideNavigator.tsx
```

## 🖼️ Missing Images

The following images need to be added to the `public/` directory for full functionality:

### Required Images:

-   `logo.png` - PaanGuru logo
-   `opportunity.png` - Slide 1 background
-   `slide2.png` - Slide 2 background
-   `slide3.png` - Slide 3 background
-   `slide7.jpg` - Business model slide
-   `slide9.jpg` - Market analysis slide
-   `slide9.webp` - WebP version of slide 9
-   `paankiosk.jpg` - PaanGuru kiosk image
-   `straw-paan.jpeg` - Straw paan product
-   `sweet-paan.jpeg` - Sweet paan product
-   `chocpaan.jpeg` - Chocolate paan product

### Favicon Files:

-   `favicon-16x16.png`
-   `favicon-32x32.png`
-   `apple-touch-icon.png`
-   `safari-pinned-tab.svg`

## 🛠️ Getting Started

1. **Install Dependencies**

    ```bash
    npm install
    ```

2. **Add Images** (Optional)

    - Copy the required images to the `public/` directory
    - Images are referenced in the components but will show placeholders if missing

3. **Run Development Server**

    ```bash
    npm run dev
    ```

4. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Metrics Displayed

-   **$93.5K** Monthly Revenue
-   **130+** Wholesale Clients
-   **79%** Annual Growth
-   **100%** Client Retention
-   **$1.1M** ARR (Annual Recurring Revenue)

## 🚀 Technologies Used

-   **Next.js 15**: React framework with App Router
-   **TypeScript**: Type-safe JavaScript
-   **Tailwind CSS 4**: Utility-first CSS framework
-   **React 19**: Latest React features
-   **Framer Motion**: Animations and transitions
-   **Chart.js**: Data visualization
-   **Three.js**: 3D graphics

## 📊 Business Overview

PaanGuru is revolutionizing Australia's ethnic food supply chain, specifically focusing on traditional paan products. The platform showcases:

-   **Market Opportunity**: $100M untapped market potential
-   **Proven Traction**: Bootstrapped to $1.1M ARR
-   **Strong Retention**: 100% client retention rate
-   **Scalable Model**: Wholesale distribution network
-   **Product Innovation**: Modern twists on traditional paan

## 🔗 Links

-   **Live Demo**: [http://localhost:3000](http://localhost:3000)
-   **Contact**: info@paanguru.com.au
-   **PDF Deck**: Available for download on the landing page

## 📝 Development

-   **Build**: `npm run build`
-   **Start**: `npm start`
-   **Lint**: `npm run lint`

## 📄 License

MIT License - see LICENSE file for details

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
