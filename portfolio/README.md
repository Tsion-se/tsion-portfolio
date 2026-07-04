# Tsion Asrat — Portfolio

Premium personal portfolio built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

## Contact Form (Firebase)

The contact form is wired to Firebase Firestore but needs your own project keys to go live:

1. Create a free project at https://console.firebase.google.com
2. Enable **Firestore Database**.
3. Project settings → General → "Your apps" → add a Web app → copy the config.
4. Copy `.env.example` to `.env` and paste in your values.
5. In Firestore → Rules, use the rule documented in `src/lib/firebase.ts`.

Until `.env` is filled in, the form validates and shows a friendly message asking
people to email you directly — it never silently pretends to succeed.

## Resume

Replace `public/resume.pdf` with your real resume (keep the same filename) —
the Download Resume buttons link straight to it.

## Deploy

Works out of the box on Vercel: `vercel --prod`, or connect the repo in the Vercel dashboard.

## Notes on Scope

This build intentionally does not include Sanity CMS or a React Three Fiber 3D
globe, to keep the codebase something that installs and builds cleanly in one
shot. Content lives in `src/constants/data.ts` as a single typed source of
truth — easy to hand off to a CMS later if you want one.
