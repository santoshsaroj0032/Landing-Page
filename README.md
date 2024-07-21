# Shahil's Landing Page - Demo

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

This project uses `next/font` to automatically optimize and load Inter, a custom Google Font.

## Project Structure

```
landing-page/
├── components/
│   ├── ContactForm.js
│   ├── Features.js
│   ├── Footer.js
│   ├── Header.js
│   └── HeroSection.js
├── pages/
│   ├── _app.js
│   └── index.js
├── public/
│   ├── images/
├── styles/
│   ├── globals.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .gitignore
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out the [Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Netlify

The easiest way to deploy your Next.js app is to use the Netlify Platform.

### Steps to Deploy

1. Sign up for Netlify: Go to [Netlify](https://www.netlify.com/) and sign up for an account.
2. Connect your repository: After logging in, click on 'New site from Git' and connect your GitHub repository.
3. Build settings:
   - Base directory: Leave it empty or specify if your project is in a subdirectory.
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy: Click on 'Deploy site' and wait for Netlify to build and deploy your site.

## Live Demo

Check out the live demo of the project: [https://shahil-landing-demo.netlify.app/](https://shahil-landing-demo.netlify.app/)

## Contact

For any inquiries, please reach out via the contact form on the landing page.
