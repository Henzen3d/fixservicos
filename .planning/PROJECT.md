# Project: Fix Serviços Redesign (WordPress to Astro)

## Goal
Migrate the existing WordPress/Divi site `fixblu.com.br` to a high-performance static site using **Astro**. The primary focus is **mobile performance** (96% mobile user base) and **SEO preservation** (maintaining URLs and metadata).

## Core Requirements
- **Framework**: Astro (Static Site Generation)
- **Styling**: Vanilla CSS (Premium, mobile-first design)
- **SEO**: 1:1 mapping of URLs, Titles, Meta Descriptions, and Canonical tags from `SEO_master.csv`.
- **Performance**: Near-perfect Lighthouse scores, minimal JavaScript.

## Component Architecture
1. **BaseHead.astro**: Manages all `<head>` metadata, SEO tags, and global assets (fonts, CSS).
2. **MainLayout.astro**: The primary wrapper for all pages.
3. **Header.astro**: Navigation and brand identity.
4. **Footer.astro**: Site-wide footer with secondary links.
5. **WhatsAppFAB.astro**: Floating Action Button for instant lead generation.
6. **GlobalCTA.astro**: Pre-footer conversion section.
7. **TrackingScripts.astro**: Centralized GTM and Google Ads scripts.

## URL Structure (SEO Preservation)
Pages will be created in `src/pages` matching the WordPress permalink structure:
- `/`
- `/eletricista/`
- `/eletricista/[servico]/`
- `/encanador/`
- `/encanador/[servico]/`
- `/marido-de-aluguel/`
- `/marido-de-aluguel/[servico]/`
- `/casa-inteligente/`
- `/servicos/`
- `/contato/`
- `/politica-de-privacidade/`

## Implementation Steps
1. **Phase 1: Project Setup**
   - Initialize Astro project.
   - Configure project structure.
   - Set up global styles and design tokens (mobile-first).
2. **Phase 2: Core Components**
   - Build `BaseHead`, `Layout`, `Header`, `Footer`.
   - Implement `WhatsAppFAB` and `GlobalCTA`.
3. **Phase 3: Route Generation**
   - Create `src/pages` structure based on `SEO_master.csv`.
   - Populate pages with SEO metadata and H1 tags.
4. **Phase 4: Content Implementation**
   - Implement service-specific content using slots in the main layout.
5. **Phase 5: Optimization & Launch**
   - Final SEO audit.
   - Performance optimization.

## Evolution
This document evolves at phase transitions and milestone boundaries.

**After each phase transition**:
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

---
*Last updated: 2026-05-02 after initialization*
