import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Brilliant Travel And Tour',
  description: 'Travel With Ease!!',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  )
}