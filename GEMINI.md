# Project Context: Ghost Theme (Dawn)

## Overview
This directory contains the source code for **Dawn**, a functional [Ghost](https://ghost.org/) theme. The project is structured to be a customizable and adaptable theme for Ghost publications, featuring various layout options, font choices, and color schemes.

## Key Technologies
*   **Ghost CMS**: The theme is built for the Ghost content management system, utilizing Handlebars (`.hbs`) for templating.
*   **CSS (PostCSS)**: Styles are written in CSS and processed using PostCSS (with `easyimport`, `autoprefixer`, and `cssnano`).
*   **JavaScript**: Custom scripts and libraries (like `owl.carousel`) are used for interactivity.
*   **Gulp**: The build system used for compiling assets (CSS, JS) and packaging the theme.

## Project Structure
*   **`*.hbs`**: Root-level Handlebars templates (e.g., `index.hbs`, `post.hbs`, `page.hbs`) that define the structure of different page types.
*   **`default.hbs`**: The main layout template wrapping all other templates.
*   **`partials/`**: Contains reusable Handlebars partials (e.g., `navigation.hbs`, `card.hbs`).
*   **`assets/css/`**: Source CSS files. `screen.css` is the entry point, importing other modules from subdirectories (`general/`, `site/`, `blog/`, etc.).
*   **`assets/js/`**: Source JavaScript files.
*   **`assets/built/`**: The destination for compiled and minified CSS and JS files.
*   **`gulpfile.js`**: Defines Gulp tasks for building CSS, JS, and watching for changes.
*   **`package.json`**: Manages dependencies and defines project scripts.

## Development Workflow

### Prerequisites
*   Node.js
*   Yarn (recommended) or npm
*   Gulp (installed globally or accessible via scripts)

### Setup
1.  Install dependencies:
    ```bash
    yarn install
    ```

### Build & Watch
To start the development server, which compiles assets and watches for file changes:
```bash
yarn dev
# OR
gulp
```
*   CSS files in `assets/css/` are compiled to `assets/built/screen.css`.
*   JS files in `assets/js/` are concatenated and minified to `assets/built/main.min.js`.
*   Handlebars files are watched for changes (triggering livereload).

### Packaging
To create a distribution zip file (`dawn.zip`) for uploading to a Ghost site:
```bash
yarn zip
```
The output will be located in the `dist/` directory.

### Testing
To validate the theme against Ghost's requirements using `gscan`:
```bash
yarn test
```

## Configuration
The theme supports various custom settings defined in `package.json` under the `config.custom` section, including:
*   `navigation_layout`: Logo positioning (Left, Middle, Stacked).
*   `color_scheme`: Auto, Light, or Dark.
*   `title_font` / `body_font`: Font pairings.
*   `show_featured_posts`, `show_author`, `show_related_posts`: Toggles for UI elements.
