/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0E3F64',  // สีหลักจากดีไซน์เดิม
        accent: '#BED84E',   // สีเขียวอ่อน
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15,23,42,0.15)',
      },
      borderRadius: {
        xl2: '1.5rem',
      },
    },
  },
  plugins: [],
};