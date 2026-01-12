# API Contracts: Udaysha's Pret

**Feature**: 1-retail-brand-transformation
**Date**: 2026-01-08

## Overview

This document specifies the API contracts for the Udaysha's Pret fashion ecommerce site. Since the site uses Next.js with Sanity CMS, most data is accessed through GROQ queries to Sanity's APIs. The contracts define the expected data structures and endpoints.

## Product API

### GET /api/products
Retrieve a list of all products

**Request**:
- Method: GET
- Endpoint: `/api/products`
- Query Parameters: None required

**Response**:
```json
{
  "products": [
    {
      "_id": "string",
      "title": "string",
      "slug": {
        "current": "string"
      },
      "price": "number",
      "salePrice": "number (optional)",
      "sizes": ["string"],
      "fabric": "string",
      "images": [
        {
          "_key": "string",
          "_ref": "string",
          "_type": "reference",
          "asset": {
            "_ref": "string",
            "_type": "reference"
          }
        }
      ],
      "category": "string",
      "availability": "boolean",
      "description": "string"
    }
  ]
}
```

### GET /api/products/{slug}
Retrieve a specific product by slug

**Request**:
- Method: GET
- Endpoint: `/api/products/{slug}`
- Path Parameter: slug (URL-friendly product identifier)

**Response**:
```json
{
  "product": {
    "_id": "string",
    "title": "string",
    "slug": {
      "current": "string"
    },
    "price": "number",
    "salePrice": "number (optional)",
    "sizes": ["string"],
    "fabric": "string",
    "images": [
      {
        "_key": "string",
        "_ref": "string",
        "_type": "reference",
        "asset": {
          "_ref": "string",
          "_type": "reference"
        }
      }
    ],
    "category": "string",
    "availability": "boolean",
    "description": "string",
    "careInstructions": "string"
  }
}
```

## Collection API

### GET /api/collections
Retrieve a list of all collections

**Request**:
- Method: GET
- Endpoint: `/api/collections`
- Query Parameters: None required

**Response**:
```json
{
  "collections": [
    {
      "_id": "string",
      "title": "string",
      "slug": {
        "current": "string"
      },
      "description": "string",
      "heroImage": {
        "_key": "string",
        "_ref": "string",
        "_type": "reference",
        "asset": {
          "_ref": "string",
          "_type": "reference"
        }
      },
      "linkedProducts": [
        {
          "_key": "string",
          "_ref": "string",
          "_type": "reference"
        }
      ]
    }
  ]
}
```

### GET /api/collections/{slug}
Retrieve a specific collection by slug

**Request**:
- Method: GET
- Endpoint: `/api/collections/{slug}`
- Path Parameter: slug (URL-friendly collection identifier)

**Response**:
```json
{
  "collection": {
    "_id": "string",
    "title": "string",
    "slug": {
      "current": "string"
    },
    "description": "string",
    "heroImage": {
      "_key": "string",
      "_ref": "string",
      "_type": "reference",
      "asset": {
        "_ref": "string",
        "_type": "reference"
      }
    },
    "linkedProducts": [
      {
        "_key": "string",
        "_ref": "string",
        "_type": "reference"
      }
    ]
  }
}
```

## Page API

### GET /api/pages/{slug}
Retrieve a specific page by slug

**Request**:
- Method: GET
- Endpoint: `/api/pages/{slug}`
- Path Parameter: slug (URL-friendly page identifier)

**Response**:
```json
{
  "page": {
    "_id": "string",
    "title": "string",
    "slug": {
      "current": "string"
    },
    "content": [
      {
        "_key": "string",
        "_type": "block",
        "children": [
          {
            "_key": "string",
            "_type": "span",
            "marks": [],
            "text": "string"
          }
        ],
        "markDefs": [],
        "style": "string"
      }
    ],
    "seo": {
      "metaTitle": "string",
      "metaDescription": "string"
    }
  }
}
```

## WhatsApp Integration API

### POST /api/whatsapp/generate-link
Generate a WhatsApp click-to-chat URL for a product

**Request**:
- Method: POST
- Endpoint: `/api/whatsapp/generate-link`
- Request Body:
```json
{
  "productName": "string",
  "productPrice": "number",
  "productUrl": "string",
  "phoneNumber": "string (optional, defaults to configured number)"
}
```

**Response**:
```json
{
  "whatsappUrl": "string"
}
```

## Error Responses

All API endpoints follow the same error response format:

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": "object (optional)"
  }
}
```

Common error codes:
- `NOT_FOUND`: Resource does not exist
- `INVALID_PARAMETER`: Invalid input parameter
- `INTERNAL_ERROR`: Internal server error
- `CMS_UNAVAILABLE`: Sanity CMS is temporarily unavailable