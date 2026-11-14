import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from https://kanchanaariyasinghe.github.io/my_profile/
// Using the same base in dev, preview and build keeps every URL identical.
// (If you move to a custom domain or <user>.github.io root, change this to '/'.)
export default defineConfig({
  base: '/my_profile/',
  plugins: [react()],
});
