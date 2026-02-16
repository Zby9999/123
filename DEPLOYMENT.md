# Deploying to GitHub Pages

This guide explains how to deploy this project to GitHub Pages.

## Prerequisites

- A GitHub account.
- Git installed on your machine.
- Node.js and npm installed.

## Method 1: Automated Deployment (Recommended)

1.  **Configure Remote**
    Ensure your local repository is connected to GitHub:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    ```

2.  **Deploy**
    Run the deploy script:
    ```bash
    npm run deploy
    ```

## Method 2: Manual Deployment (If automated fails)

If you encounter errors like `RPC failed` or `branch already exists`, follow these steps to deploy manually:

1.  **Build the Project**
    ```bash
    npm run build
    ```

2.  **Enter the Dist Folder**
    ```bash
    cd dist
    ```

3.  **Initialize Git in Dist**
    ```bash
    git init
    git checkout -b gh-pages
    git add -A
    git commit -m "deploy"
    ```

4.  **Push to GitHub**
    Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual details.
    *Note: The `-f` flag forces the push, overwriting the previous deployment.*
    ```bash
    git push -f https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git gh-pages
    ```

5.  **Return to Project Root**
    ```bash
    cd ..
    ```

## Configure GitHub Pages Settings

1.  Go to your repository on GitHub.
2.  Click on **Settings** > **Pages**.
3.  Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4.  Under **Branch**, select `gh-pages` and `/ (root)`.
5.  Click **Save**.

## Access Your Website

Wait a few minutes for the deployment to finish.
Your website will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
