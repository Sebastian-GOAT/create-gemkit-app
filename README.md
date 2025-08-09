# create-gemkit-app

CLI tool for creating new applications built on [Gemkit](https://github.com/Sebastian-GOAT/create-gemkit-app) + Vite.
It generates a project structure with Tailwind CSS and TypeScript already integrated.

## Usage

```bash
npx create-gemkit-app@latest my-app
cd my-app
npm install
npm run dev
```

## Development

For development, run `npm run dev`, which will start the Vite dev server on port 5173 (if available).
The Vite dev server provides extremely fast hot reloads as you make changes to your source code.

## Building for production

If you want to deploy your app, run `npm run build`, it will create a dist/ folder with your bundled
code, which you can deploy on almost any web hosting service.

## Preview

You can run `npm run preview` for a live preview from the dist/ folder.