# Deploying to GitHub Pages

This guide explains how to deploy this project to GitHub Pages.

## Prerequisites

- A GitHub account.
- Git installed on your machine.
- Node.js and npm installed.

## Deployment Steps

1.  **Create a New Repository on GitHub**
    - Go to [GitHub](https://github.com) and log in.
    - Click the "+" icon in the top right and select "New repository".
    - Name your repository (e.g., `my-landing-page` or `username.github.io`).
    - Make sure it is set to **Public**.
    - Click "Create repository".

2.  **Initialize Git and Push to GitHub**
    Open your terminal in the project directory and run the following commands (replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual details):

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

3.  **Deploy the Website**
    This project is configured to use the `gh-pages` package for deployment. This builds the project and pushes the `dist` folder to a `gh-pages` branch on your repository.

    Run the following command in your terminal:

    ```bash
    npm run deploy
    ```

    *Note: This command will automatically run `npm run build` before deploying.*

4.  **Configure GitHub Pages Settings**
    - Go to your repository on GitHub.
    - Click on **Settings** > **Pages**.
    - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
    - Under **Branch**, select `gh-pages` and `/ (root)`.
    - Click **Save**.

5.  **Access Your Website**
    Wait a few minutes for the deployment to finish. You can see the progress in the "Actions" tab of your repository.
    Once complete, your website will be live at:
    `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Troubleshooting

-   **404 Errors**: If assets are missing, ensure `vite.config.js` has `base: './'` set (already configured).
-   **Updates**: To deploy changes, simply commit your changes and run `npm run deploy` again.
