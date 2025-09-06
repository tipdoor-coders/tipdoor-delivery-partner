
# Delivery Partner App

This is a Delivery Partner web application built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and ESLint. It is designed to undertake the delivery task of the platform that is TipDoor

## Features

- **Login & Signup:** Secure authentication for delivery partners.
- **Deliveries List:** View all assigned deliveries.
- **Delivery Details:** See details for each delivery.
- **Reusable Components:** Navbar, Footer, and more.

## Technologies Used

- Next.js (App Router)
- Tailwind CSS
- ESLint
- npm

## Folder Structure

```
app/
	components/        # Shared UI components (Navbar, Footer)
	deliveries/        # Deliveries list and details pages
	login/             # Login page
	signup/            # Signup page
	globals.css        # Global styles
public/              # Static assets
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

You can start editing the app by modifying files in the `app/` directory. Pages auto-update as you edit.

API logic and backend integration should be added to handle real delivery data.

## Learn More

See the [Next.js Documentation](https://nextjs.org/docs) and [Tailwind CSS Documentation](https://tailwindcss.com/docs) for more details.

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or your preferred platform.

---

© 2025 Tipdoor. All rights reserved.

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
