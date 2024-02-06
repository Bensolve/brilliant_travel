import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';


import './globals.css'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


{/* <!-- Meta Tags Generated via https://www.opengraph.xyz --></meta> */}

export const metadata: Metadata = {
  metadataBase: new URL ("https://brilliant-travel-and-tour.vercel.app/"),
  title: 'Brilliant Travel And Tour',
  description: 'Travel With Ease!!',
  other: {
    "og:url" :"https://brilliant-travel-and-tour.vercel.app/",
    "twitter:image":"https://opengraph.b-cdn.net/production/documents/93dbc968-02dc-4346-83b1-e50d2a85ef31.jpg?token=-n-zxvb0XBkghBf98c01BKOILknhpDld-Xu8tGebgLU&height=1000&width=1000&expires=33243251843",
    "twitter:card" :"summary_large_image",
    "og:type": "website",
    "og:image" :"https://opengraph.b-cdn.net/production/documents/93dbc968-02dc-4346-83b1-e50d2a85ef31.jpg?token=FESX-7s8qBhSaEb7jbAZMyDWKFhpxAUpBETjSFHrxdU&height=1000&width=1000&expires=33243231646",



  //  https://www.opengraph.xyz --></meta>
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="A5zxzFlJPm_GjdXlVEfZkZtFXXW9RE4lX7dmQXUU7w8" />
        <meta http-equiv="Cache-Control" content="public, max-age=3600"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar/>
        <main >
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  )
}

// relative overflow-hidden for main tag class