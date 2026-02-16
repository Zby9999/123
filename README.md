# Pixel-Perfect Landing Page Implementation

This project is a pixel-perfect implementation of a Figma design for a 1-on-1 interactive landing page.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## Design Tokens

The project uses Tailwind CSS with custom configuration to match the Figma design.

### Colors
-   `primary`: #ff5e49 (and variations)
-   `secondary`: #402926
-   `success`: #3cb13e
-   `background`: Gradient from `rgba(255,237,233,0.8)` to `#fce1df`

### Fonts
-   `Geist`: Custom font for headings and UI text.
-   `Inter`: Body text.

## Testing

Unit tests are implemented using Vitest and React Testing Library.

Run tests with:
```bash
npm test
```
(Note: Ensure `vitest` is set up in `package.json` scripts, or use `npx vitest run`)

## Deployment

The project is ready to be deployed to Vercel or Netlify.
-   Push to the main branch.
-   Connect the repository to your Vercel/Netlify account.
-   The build settings should be automatically detected (Vite).

## Structure

-   `src/components`: Reusable UI components.
-   `src/assets`: Images and SVGs.
-   `src/test`: Test setup.
-   `src/HeroDesign.jsx`: Original reference implementation.
