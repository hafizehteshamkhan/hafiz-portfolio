# Hafiz Ehtesham Khan — Portfolio

Remix + Tailwind CSS se bana hua dark-theme portfolio.

## Run locally

```bash
npm install
npm run dev
```

Browser mein `http://localhost:3000` open karein.

## Build for production

```bash
npm run build
npm start
```

## Structure

- `app/root.tsx` — layout, fonts, meta tags
- `app/routes/_index.tsx` — home page, sab sections ko jodta hai
- `app/components/` — Nav, Hero, About, Skills, Experience, Projects, Contact
- `public/resume.pdf` — Resume download button isi file ko serve karta hai (apna latest resume yahan replace kar dein)

## Editing content

Har section ka content uske apne component file mein hai (`app/components/*.tsx`), simple arrays aur JSX — koi extra config nahi.
