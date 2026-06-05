# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Environment variables

This project requires a Clerk publishable key for client-side authentication.

1. Copy `.env.example` to `.env.local`
2. Set the variable below:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_live_... or pk_test_...
```

3. For Vercel, add `VITE_CLERK_PUBLISHABLE_KEY` in Project Settings → Environment Variables and redeploy.

If this var is missing, the app throws `Missing Publishable Key` at startup.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
