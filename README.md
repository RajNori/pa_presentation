# InvestP - Investment Presentation Platform

A modern, responsive investment presentation platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

-   **Responsive Design**: Mobile-first approach with full responsive support
-   **TypeScript**: Full type safety and better developer experience
-   **Tailwind CSS**: Utility-first CSS framework for rapid UI development
-   **Component-Based**: Reusable components for maintainable code
-   **Modern Layout**: Clean, professional design optimized for presentations

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata and global styles
│   ├── page.tsx            # Main page with slideshow component
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   └── SlideshowCard.tsx   # Reusable slideshow card component
```

## Components

### SlideshowCard

A reusable card component for displaying presentation content with:

-   **Image Support**: Background images with proper aspect ratios
-   **Responsive Layout**: Adapts from mobile to desktop layouts
-   **Author Information**: Avatar/initials with name and date
-   **Badge System**: Premium content indicators
-   **TypeScript Interface**: Full type safety for props

#### Usage

```tsx
import SlideshowCard from '@/components/SlideshowCard'

const presentation = {
  imageUrl: 'https://example.com/image.jpg',
  imageAlt: 'Presentation thumbnail',
  badge: 'Premium Content',
  title: 'Investment Strategy Overview',
  description: 'Comprehensive analysis of market trends...',
  author: {
    name: 'Investment Research Team',
    initials: 'IR',
    date: 'Dec 2024'
  }
}

<SlideshowCard {...presentation} />
```

## Getting Started

1. **Install Dependencies**

    ```bash
    npm install
    ```

2. **Run Development Server**

    ```bash
    npm run dev
    ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Technologies Used

-   **Next.js 15**: React framework with App Router
-   **TypeScript**: Type-safe JavaScript
-   **Tailwind CSS 4**: Utility-first CSS framework
-   **React 19**: Latest React features

## Development

-   **Build**: `npm run build`
-   **Start**: `npm start`
-   **Lint**: `npm run lint`

## Customization

The slideshow component is fully customizable through props:

-   `imageUrl`: Background image URL
-   `imageAlt`: Alt text for accessibility
-   `badge`: Content badge/label
-   `title`: Presentation title
-   `description`: Content description
-   `author`: Author information object

## License

MIT License - see LICENSE file for details

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
