import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    build: {
      outDir: 'docs', // Change the output directory to 'docs'
    },
    site: 'https://manases.dev', // Replace with your custom domain
  });
