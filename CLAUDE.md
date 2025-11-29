# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **ghost-term**, a Ghost theme based on the Dawn theme with heavy customization for a terminal/enterprise zen aesthetic. The theme uses dark mode styling with monospace fonts (Space Mono) and a minimalist color palette.

## Development Commands

### Essential Commands
```bash
# Install dependencies
yarn

# Build CSS/JS and watch for changes with live reload
yarn dev

# Run theme validation tests
yarn test

# Build and package theme for upload
yarn zip
```

### Build System
The theme uses Gulp for building and packaging. The build process:
- Compiles CSS from `assets/css/screen.css` using PostCSS (with autoprefixer and cssnano)
- Concatenates and minifies JavaScript from `assets/js/` and shared theme assets
- Outputs built files to `assets/built/`
- Creates a zip package in `dist/` folder

## Architecture

### Template Structure
Ghost themes use Handlebars (`.hbs`) templates with a specific hierarchy:

**Core Templates:**
- `default.hbs` - Main layout wrapper with header, footer, and site structure
- `index.hbs` - Homepage template
- `post.hbs` - Individual post template
- `page.hbs` - Static page template
- `author.hbs` - Author archive template
- `tag.hbs` - Tag archive template

**Custom Templates:**
- `custom-full-feature-image.hbs` - Full-width featured image variant
- `custom-narrow-feature-image.hbs` - Narrow featured image variant
- `custom-no-feature-image.hbs` - No featured image variant

**Partials** (in `partials/`):
- `content.hbs` - Main post/page content display
- `cover.hbs` - Homepage hero/cover section
- `featured-posts.hbs` - Featured posts carousel
- `loop.hbs` - Post list loop
- `pagination.hbs` - Pagination controls
- `related-posts.hbs` - Related posts section
- `comments.hbs` - Comments integration
- `icons/` - SVG icon partials

### CSS Architecture
CSS is organized in a modular structure under `assets/css/`:

- `screen.css` - Main entry point that imports all other CSS files
- `general/` - Base styles (fonts, buttons, forms, icons, basics)
- `site/` - Site-wide components (layout, header, cover)
- `blog/` - Blog-specific styles (feed, featured, single post, author, etc.)
- `misc/` - Utilities, animations, dark mode overrides

**Theme Customizations:**
The theme has custom CSS variables defined in `assets/css/screen.css` starting at line 27:
- Dark background (`--white-color: #0c0c0c`)
- Terminal-style monospace font (`--font-mono`, `--font-body`: Space Mono)
- Minimal color palette with white accents

### JavaScript
JavaScript is concatenated from:
1. Shared Ghost theme assets (`@tryghost/shared-theme-assets`)
2. Custom libraries in `assets/js/lib/` (owl.carousel)
3. Theme-specific code in `assets/js/main.js`

External dependencies loaded via CDN in `default.hbs`:
- jQuery 3.5.1
- Prism.js for syntax highlighting
- tocbot for table of contents generation

### Ghost Theme Configuration
The theme exposes custom settings in `package.json` under `config.custom`:
- `navigation_layout` - Logo positioning options
- `title_font` / `body_font` - Typography choices
- `color_scheme` - Light/Dark/Auto mode
- `show_featured_posts` - Toggle featured carousel
- `show_author` / `show_related_posts` - Post metadata toggles

## Development Guidelines

### When Editing Templates
- Ghost uses Handlebars helpers like `{{#is}}`, `{{#match}}`, `{{#if}}`, etc.
- Built-in Ghost helpers: `{{navigation}}`, `{{ghost_head}}`, `{{ghost_foot}}`, etc.
- Custom theme settings accessed via `@custom.setting_name`
- Site data accessed via `@site.property`

### When Editing Styles
- Edit source CSS files in `assets/css/`, NOT the built files in `assets/built/`
- The build process uses PostCSS, so future CSS features are supported
- Main theme overrides start after the imports in `screen.css`
- Dark mode styles are in `misc/dark.css`

### When Editing JavaScript
- Edit `assets/js/main.js` or add files to `assets/js/lib/`
- Files are concatenated in order (lib files first, then main.js)
- The build minifies and creates sourcemaps

### Theme Testing
- Use `yarn test` to run gscan validation before packaging
- gscan checks for Ghost theme compatibility and best practices
- Fix any errors before uploading to Ghost

## Custom Features

This theme includes custom header elements in `default.hbs`:
- Profile image and quote displayed in header (lines 48-51)
- Integration with Prism.js for code syntax highlighting
- Table of contents generation using tocbot
- Custom dark mode color scheme throughout
