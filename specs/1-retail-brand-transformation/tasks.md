---

description: "Task list for Udaysha's Pret retail brand transformation"
---

# Tasks: Retail Brand Transformation

**Input**: Design documents from `/specs/1-retail-brand-transformation/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Clone the source repository from https://github.com/sabterrazaqadri/Golden-Orchard-Perfumes
- [x] T002 [P] Install project dependencies using npm install
- [x] T003 [P] Configure environment variables for Sanity CMS integration
- [x] T004 Set up Sanity Studio project for content management
- [x] T005 [P] Install Sanity CLI and initialize Sanity project

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Create Sanity schema definitions for Product, Collection, and Page entities
- [x] T007 [P] Set up Sanity client connection in Next.js application
- [x] T008 [P] Configure Tailwind CSS for black and white theme only
- [x] T009 Create reusable UI components for product listings and detail views
- [x] T010 Set up dynamic routing for products, collections, and pages
- [x] T011 [P] Configure image optimization for Next.js and Sanity
- [x] T012 Create utility functions for WhatsApp URL generation

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Browse Fashion Products (Priority: P1) 🎯 MVP

**Goal**: Enable customers to browse fashion products and initiate purchases via WhatsApp

**Independent Test**: Can be fully tested by visiting product pages and clicking "Buy Now" buttons, delivering the core purchasing experience.

### Implementation for User Story 1

- [x] T013 [P] [US1] Create Product model/types based on data-model.md in src/types/Product.ts
- [x] T014 [P] [US1] Create Collection model/types based on data-model.md in src/types/Collection.ts
- [x] T015 [US1] Implement product listing page at app/products/page.tsx
- [x] T016 [US1] Implement product detail page at app/products/[slug]/page.tsx
- [x] T017 [US1] Fetch product data from Sanity CMS in product listing page
- [x] T018 [US1] Fetch product data from Sanity CMS in product detail page
- [x] T019 [US1] Implement "Buy Now" button with WhatsApp redirection on product detail page
- [x] T020 [US1] Style product listing with black and white theme using Tailwind
- [x] T021 [US1] Style product detail page with black and white theme using Tailwind
- [x] T022 [US1] Ensure all product images follow black and white theme requirements

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Explore Collections (Priority: P2)

**Goal**: Enable customers to discover products organized by collections or categories

**Independent Test**: Can be tested by navigating through collection pages and verifying product listings, delivering organized browsing experience.

### Implementation for User Story 2

- [x] T023 [P] [US2] Create Collection page component at app/collections/[slug]/page.tsx
- [x] T024 [US2] Fetch collection data from Sanity CMS in collection page
- [x] T025 [US2] Display curated product selection in collection page
- [x] T026 [US2] Implement navigation from collection to product detail pages
- [x] T027 [US2] Style collection page with black and white theme using Tailwind
- [x] T028 [US2] Ensure collection images follow black and white theme requirements
- [x] T029 [US2] Add collection navigation links to homepage

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

- [x] T030 [P] [US3] Create Page model/type based on data-model.md in src/types/Page.ts
- [x] T031 [US3] Create about page component at app/about/page.tsx
- [x] T032 [US3] Create contact page component at app/contact/page.tsx
- [x] T033 [US3] Fetch about page data from Sanity CMS
- [x] T034 [US3] Fetch contact page data from Sanity CMS
- [x] T035 [US3] Implement contact form or contact information display
- [x] T036 [US3] Style about and contact pages with black and white theme using Tailwind
- [x] T037 [US3] Add navigation links to about and contact pages in header/footer

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Brand & Content Transformation

**Goal**: Replace all perfume-related content with fashion content

- [x] T038 Replace "Golden Orchard" references with "Udaysha's Pret" throughout the codebase
- [x] T039 Replace perfume/fragrance terminology with fashion/pret terminology
- [x] T040 Update metadata, SEO titles & descriptions with new brand content
- [x] T041 Update navbar labels with fashion-related navigation
- [x] T042 Update footer content with new brand information
- [x] T043 Remove all perfume-related imagery and replace with fashion placeholders
- [x] T044 Update homepage content to reflect fashion brand identity
- [x] T045 Verify zero perfume references remain in repository

---

## Phase 7: UI Theme Normalization

**Goal**: Enforce elegant black & white UI without redesign

- [x] T046 Audit all Tailwind classes for non-grayscale colors
- [x] T047 Normalize all color utilities to black, white, and grayscale shades only
- [x] T048 Remove all color utilities and decorative accents from components
- [x] T049 Ensure text contrast meets accessibility standards (WCAG)
- [x] T050 Verify no non-grayscale color classes exist in the application

---

## Phase 8: Route & SEO Verification

**Goal**: Ensure all required routes and SEO rules are satisfied

- [x] T051 Verify homepage route (/) functions correctly
- [x] T052 Verify products route (/products) functions correctly
- [x] T053 Verify product detail routes (/products/[slug]) function correctly
- [x] T054 Verify collection routes (/collections/[slug]) function correctly
- [x] T055 Verify about route (/about) functions correctly
- [x] T056 Verify contact route (/contact) functions correctly
- [x] T057 Ensure metadata exists for all pages
- [x] T058 Confirm SEO fields are CMS-driven on all pages

---

## Phase 9: Cleanup & Hardening

**Goal**: Remove dead code and enforce quality

- [x] T059 Remove unused components from the original perfume site
- [x] T060 Remove commented-out cart logic and any cart-related code
- [x] T061 Enforce TypeScript strict checks throughout the application
- [x] T062 Verify clean build without errors
- [x] T063 Remove any unused exports and dependencies
- [x] T064 Ensure no console errors exist in browser console
- [x] T065 Remove any hardcoded business data (ensure all content is CMS-driven)

---

## Phase 10: Final Acceptance Check

**Goal**: Validate against sp.specify requirements

- [x] T066 Verify repo lineage has been preserved during refactoring
- [x] T067 Confirm UI is black & white only with no other colors/gradients
- [x] T068 Verify CMS controls all content with no hardcoded content remaining
- [x] T069 Confirm "Buy Now" → WhatsApp functionality works correctly
- [x] T070 Ensure no cart/checkout code exists in the codebase
- [x] T071 Verify successful build on Vercel
- [x] T072 Run final end-to-end tests to validate all requirements

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T073 [P] Documentation updates in docs/
- [x] T074 Code cleanup and refactoring
- [x] T075 Performance optimization across all stories
- [x] T076 [P] Additional unit tests (if requested) in tests/unit/
- [x] T077 Security hardening
- [x] T078 Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Brand & Content Transformation (Phase 6)**: Can run in parallel with user stories after foundational
- **UI Theme Normalization (Phase 7)**: Depends on foundational completion
- **Route & SEO Verification (Phase 8)**: Depends on all user stories completion
- **Cleanup & Hardening (Phase 9)**: Depends on all feature implementation
- **Final Acceptance Check (Phase 10)**: Depends on all previous phases completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all models for User Story 1 together:
T013 [P] [US1] Create Product model/types based on data-model.md in src/types/Product.ts
T014 [P] [US1] Create Collection model/types based on data-model.md in src/types/Collection.ts

# Launch all UI components for User Story 1 together:
T015 [US1] Implement product listing page at app/products/page.tsx
T016 [US1] Implement product detail page at app/products/[slug]/page.tsx
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Complete Brand & Content Transformation → Test → Deploy
6. Complete UI Theme Normalization → Test → Deploy
7. Complete Route & SEO Verification → Test → Deploy
8. Complete Cleanup & Hardening → Test → Deploy
9. Complete Final Acceptance Check → Deploy to production
10. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
   - Developer D: Brand & Content Transformation
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence