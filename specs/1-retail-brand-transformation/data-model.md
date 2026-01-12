# Data Model: Retail Brand Transformation

**Feature**: 1-retail-brand-transformation
**Date**: 2026-01-08

## Overview

This document defines the data models for the Udaysha's Pret fashion ecommerce site, based on the requirements from the feature specification. These models will be implemented in Sanity CMS.

## Entities

### Product

Represents a fashion item in the Udaysha's Pret collection.

```javascript
{
  _id: string,           // Unique identifier
  _type: "product",      // Document type
  title: string,         // Product name (e.g., "Cotton Blend Blazer")
  slug: {
    current: string      // URL-friendly identifier (e.g., "cotton-blend-blazer")
  },
  price: number,         // Price in smallest currency unit (e.g., cents)
  salePrice?: number,    // Optional sale price
  sizes: [string],       // Available sizes (e.g., ["XS", "S", "M", "L"])
  fabric: string,        // Fabric composition (e.g., "60% Cotton, 40% Polyester")
  images: [Image],       // Product images array
  category: string,      // Product category (e.g., "blazers", "dresses", "tops")
  availability: boolean, // Whether the product is in stock
  description: string,   // Detailed product description
  careInstructions: string, // Care instructions for the garment
  createdAt: datetime,   // Creation timestamp
  updatedAt: datetime    // Last update timestamp
}
```

#### Relationships
- Category: Links to a category grouping
- Collections: Many-to-many relationship with collections

#### Validation Rules
- Title: Required, minimum 3 characters
- Slug: Required, unique, URL-safe format
- Price: Required, positive number
- Sizes: Required, non-empty array
- Fabric: Required, minimum 5 characters
- Images: Required, minimum 1 image
- Category: Required, valid category reference

### Collection

Represents a curated group of products (e.g., seasonal collection, category).

```javascript
{
  _id: string,              // Unique identifier
  _type: "collection",      // Document type
  title: string,            // Collection name (e.g., "Summer Essentials")
  slug: {
    current: string         // URL-friendly identifier
  },
  description: string,      // Collection description
  heroImage: Image,         // Featured image for the collection
  linkedProducts: [Reference<Product>], // Products in this collection
  seo: {
    metaTitle: string,      // SEO meta title
    metaDescription: string // SEO meta description
  },
  createdAt: datetime,      // Creation timestamp
  updatedAt: datetime       // Last update timestamp
}
```

#### Validation Rules
- Title: Required, minimum 3 characters
- Slug: Required, unique, URL-safe format
- Description: Required, minimum 10 characters
- HeroImage: Required
- LinkedProducts: Required, minimum 1 product

### Page

Represents CMS-managed content pages (e.g., About, Contact).

```javascript
{
  _id: string,              // Unique identifier
  _type: "page",            // Document type
  title: string,            // Page title
  slug: {
    current: string         // URL-friendly identifier
  },
  content: PortableText,    // Main page content in portable text format
  seo: {
    metaTitle: string,      // SEO meta title
    metaDescription: string // SEO meta description
  },
  createdAt: datetime,      // Creation timestamp
  updatedAt: datetime       // Last update timestamp
}
```

#### Validation Rules
- Title: Required, minimum 3 characters
- Slug: Required, unique, URL-safe format
- Content: Required, minimum 50 characters

## State Transitions

### Product Availability
- IN_STOCK: Product is available for purchase
- OUT_OF_STOCK: Product is temporarily unavailable
- DISCONTINUED: Product is no longer available

## Relationships

```
Product 1---* ProductCategory
Product *---* Collection
Page 1---1 SEO
Product 1---1 SEO
Collection 1---1 SEO
```

## Indexes

- Product.slug (unique)
- Product.category (indexed)
- Collection.slug (unique)
- Page.slug (unique)