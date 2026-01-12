# Quickstart Guide: Udaysha's Pret Development

**Feature**: 1-retail-brand-transformation
**Date**: 2026-01-08

## Overview

This guide provides instructions for setting up and running the Udaysha's Pret fashion ecommerce site locally. The site has been transformed from the original Golden Orchard Perfumes store to feature a black and white theme with Sanity CMS integration and WhatsApp-based purchasing.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git
- Access to Sanity project (for content management)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sabterrazaqadri/Golden-Orchard-Perfumes.git
cd Golden-Orchard-Perfumes  # This repository has been transformed to Udaysha's Pret
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory with the following variables:

```env
# Sanity configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset_name
SANITY_API_READ_TOKEN=your_read_token
NEXT_PUBLIC_SANITY_API_VERSION=2023-06-27

# WhatsApp configuration
WHATSAPP_PHONE_NUMBER=your_business_phone_number
WHATSAPP_DEFAULT_MESSAGE=your_default_message_template

# Vercel deployment (if applicable)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see the site running locally.

## Sanity CMS Setup

### 1. Install Sanity CLI

```bash
npm install -g @sanity/cli
```

### 2. Login to Sanity

```bash
sanity login
```

### 3. Navigate to the Sanity Studio directory and start it

```bash
cd sanity
sanity start
```

The Sanity Studio will be available at `http://localhost:3333`.

## Key Features

### Black & White Theme
- The entire site uses an elegant black and white theme
- Only black (#000000), white (#FFFFFF), and neutral grayscale shades are allowed
- All color utilities have been removed from Tailwind CSS

### CMS Integration
- All product, collection, and page content is managed through Sanity CMS
- No hardcoded content remains in the codebase
- Content updates happen in real-time through the Sanity Studio

### WhatsApp Purchase Flow
- Each product page has a "Buy Now" button
- Clicking the button redirects to WhatsApp with a pre-filled message
- The message includes product name, price, and product URL

## Project Structure

```
frontend/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   ├── products/        # Product listing and detail pages
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── collections/     # Collection pages
│   │   └── [slug]/page.tsx
│   ├── about/page.tsx   # About page
│   └── contact/page.tsx # Contact page
├── components/          # Reusable UI components
├── lib/                 # Utility functions and Sanity client
├── styles/              # Global styles and Tailwind config
└── sanity/              # Sanity CMS configuration
```

## Common Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linter
- `sanity deploy` - Deploy Sanity Studio (from sanity directory)

## Troubleshooting

### Common Issues

1. **Sanity Content Not Loading**
   - Verify your environment variables are correctly set
   - Check that your Sanity project has content created
   - Ensure your API token has read permissions

2. **WhatsApp Link Not Working**
   - Verify the phone number format (should include country code)
   - Check that the default message template is properly formatted

3. **Theme Colors Not Applied**
   - Ensure all color utilities have been replaced with grayscale equivalents
   - Check that the Tailwind configuration is properly set

## Next Steps

1. Add products to Sanity CMS
2. Create collections in Sanity CMS
3. Customize the about and contact pages
4. Configure your WhatsApp business number
5. Test the purchase flow
6. Deploy to production