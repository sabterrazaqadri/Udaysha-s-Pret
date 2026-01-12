# Research: Retail Brand Transformation

**Feature**: 1-retail-brand-transformation
**Date**: 2026-01-08

## Objective

This document captures research findings for transforming the Golden Orchard Perfumes website into Udaysha's Pret fashion ecommerce site, focusing on the technical requirements and implementation approach.

## Repository Analysis

### Source Repository
- URL: https://github.com/sabterrazaqadri/Golden-Orchard-Perfumes/tree/main
- Technology Stack: Next.js (App Router), TypeScript, Tailwind CSS
- Architecture: SSR/SSG with Next.js App Router
- Current Domain: Perfume/fragrance ecommerce

### Key Findings
- The repository uses Next.js 14 with App Router
- Tailwind CSS for styling
- TypeScript for type safety
- Existing ecommerce patterns for product display
- Current routing structure needs to be adapted for fashion products
- Existing perfume-related content and imagery needs complete replacement

## Brand Transformation Requirements

### Content Replacement
- Replace "Golden Orchard" with "Udaysha's Pret"
- Replace perfume/fragrance terminology with fashion/pret terminology
- Update all product descriptions and metadata
- Replace perfume imagery with fashion imagery

### Visual Requirements
- Implement elegant black and white theme only
- Allow grayscale shades only
- Remove all color utilities and decorative accents
- Maintain accessibility standards (WCAG contrast guidelines)

## CMS Integration Strategy

### Sanity CMS Implementation
- Initialize Sanity project for content management
- Create schemas for Product, Collection, and Page entities
- Implement GROQ queries for data fetching
- Connect Sanity Studio to Next.js application

### Schema Design
- Product: title, slug, price, salePrice, sizes, fabric, images, category, availability
- Collection: title, slug, description, heroImage, linkedProducts
- Page: title, slug, content (portable text), SEO fields

## WhatsApp Integration

### Buy Now Flow
- Single CTA: "Buy Now" on each product page
- Redirect to WhatsApp click-to-chat URL
- Pre-fill message with product name, price, and product URL
- Make WhatsApp number configurable

## Technical Constraints

### Non-Negotiable Requirements
- Preserve repository history during refactoring
- Maintain existing tech stack (Next.js, TypeScript, Tailwind)
- No cart or checkout functionality (only "Buy Now" to WhatsApp)
- All content must be CMS-driven after implementation
- No hardcoded business data allowed

## Implementation Approach

### Phased Implementation
1. Repository assimilation and inventory of files requiring modification
2. Brand and content transformation
3. UI theme normalization to black and white
4. Sanity CMS initialization and schema creation
5. CMS content wiring to replace static content
6. WhatsApp "Buy Now" flow implementation
7. Route and SEO verification
8. Cleanup and hardening
9. Final acceptance check

## Risk Assessment

### Potential Challenges
- Ensuring all perfume references are replaced with fashion content
- Maintaining performance while adding CMS integration
- Preserving existing functionality during refactoring
- Ensuring proper contrast ratios in black and white theme

### Mitigation Strategies
- Systematic content audit and replacement process
- Performance testing at each phase
- Maintaining existing layout structure during transformation
- Using WCAG-compliant contrast ratios

## Dependencies

### External Services
- Sanity CMS for content management
- WhatsApp Business API for messaging integration
- Vercel for deployment

### Third-Party Libraries
- @sanity/image-url for image optimization
- next-sanity for Next.js integration
- Portable text libraries for content rendering