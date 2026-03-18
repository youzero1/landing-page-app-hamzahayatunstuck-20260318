import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'MyLandingPage',
  description: 'A modern, beautiful landing page built with Next.js and Tailwind CSS',
  keywords: ['landing page', 'nextjs', 'tailwind', 'modern'],
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_NAME || 'MyLandingPage',
    description: 'A modern, beautiful landing page built with Next.js and Tailwind CSS',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
