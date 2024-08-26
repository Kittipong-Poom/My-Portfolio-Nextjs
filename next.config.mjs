// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
      locales: ['en', 'th'], // Define your supported locales
      defaultLocale: 'en',    // Set your default locale
      localeDetection: false, // Disable automatic locale detection (optional)
    },
  };
  
  export default nextConfig;
  