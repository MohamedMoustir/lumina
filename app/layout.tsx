import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moody Pâtisserie | Small Bites, Big Mood · Marrakech',
  description: 'Découvrez les desserts Moody Pâtisserie à Marrakech : Fraise, Chocolat et Pistachio, à partir de 35 DH. Commandez sur WhatsApp.',
  generator: 'v0.app',
  openGraph: {
    title: 'Moody Pâtisserie · Marrakech',
    description: 'De la douceur à chaque bouchée. Small bites, big mood.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-13%20at%2015.21.20%20%281%29-7jJ3cnx8odveSMP4IjmowtOq100dJM.jpeg'],
    locale: 'fr_MA',
    type: 'website',
  },
  alternates: { canonical: '/' },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
