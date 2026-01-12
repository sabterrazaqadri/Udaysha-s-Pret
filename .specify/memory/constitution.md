<!--
Sync Impact Report:
- Version change: 0.1.0 → 1.0.0
- Modified principles: All principles newly defined for Udaysha's Pret project
- Added sections: Core Principles (6), Additional Constraints, Development Workflow
- Removed sections: None
- Templates requiring updates: N/A (new project constitution)
- Follow-up TODOs: None
-->

# Udaysha's Pret Constitution

## Core Principles

### Repository Integrity
The existing Golden Orchard Perfumes repository must be pulled and reused, not recreated. File structure must be evolved, not replaced. The repo at https://github.com/sabterrazaqadri/Golden-Orchard-Perfumes serves as the foundation for this project.

### No Generative Redesign
No new brand concepts, layouts, or creative directions are allowed. Existing layout patterns must be adapted, not reinvented. All design elements must be evolved from the existing codebase rather than creating new ones.

### CMS-First Control
All products, collections, and pages must be CMS-driven. No hardcoded business content after migration. All dynamic content must be sourced from the CMS to ensure maintainability and flexibility.

### Ecommerce Readiness
Website must support scalable ecommerce features (cart, checkout later). Initial checkout may be non-payment (WhatsApp / inquiry based). The system must be architected to support future payment integrations.

### Automation Authority
Qwen (SpecifyPlus) is the sole execution agent. Humans only define constraints and validate output. All implementation work must be performed through automated tools and processes.

### Foundational Rules Compliance
All development must adhere to the explicitly defined non-negotiable rules: No new Next.js app scaffolding, No removal of App Router, No replacement of Tailwind, No monolithic page logic, No vendor-locked ecommerce platform.

## Additional Constraints

Technology Stack Requirements:
- Next.js with App Router (must remain)
- Tailwind CSS (must remain)
- CMS integration for all dynamic content
- Ecommerce functionality with cart and checkout capabilities

Repository Management:
- Evolve existing structure rather than creating new
- Maintain all existing functionality while adding new features
- Ensure backward compatibility where possible

## Development Workflow

Code Review Requirements:
- All changes must comply with the constitution principles
- Repository integrity must be maintained
- CMS-first approach must be verified
- No hardcoded content allowed for business data

Testing Gates:
- All ecommerce functionality must be tested
- CMS integration points must be validated
- Responsive design must be verified across devices
- Performance benchmarks must be met

Deployment Approval Process:
- Staging environment validation required
- Ecommerce functionality verification
- CMS content rendering validation
- Cross-browser compatibility check

## Governance

This constitution supersedes all other development practices for the Udaysha's Pret project. All amendments require proper documentation, approval, and migration planning. The constitution ensures that the project remains aligned with its core mission of transforming the existing Golden Orchard Perfumes repository into a fashion ecommerce website while maintaining repository integrity and following the established constraints.

All PRs and reviews must verify compliance with these principles. Any complexity introduced must be justified with clear benefits to the project's objectives.

**Version**: 1.0.0 | **Ratified**: 2026-01-08 | **Last Amended**: 2026-01-08
