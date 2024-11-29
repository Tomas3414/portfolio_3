import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './css/globals.css'
import AppTheme from './components/theme/AppTheme'
import Navbar from './components/others/Navbar'
import Footer from './components/others/Footer'


export const metadata: Metadata = {
  title: 'Moinak Majumdar | Web (MERN) & Flutter Developer',
  description: "Hey! this is @moinak05, A passionate self taught developer expert in bringing your digital ideas to life with creativity and precision.",
  authors: [{ name: 'Moinak Majumdar', url: 'https://www.linkedin.com/in/moinak-majumdar' }],
  keywords: ['Web Development', 'Flutter Projects', 'Responsive Design', 'Mobile App Development', 'Innovative Technology', 'User Experience (UX)', 'Front-end Development', 'Full-stack Development', 'Web Applications', 'Flutter Apps', 'UI/UX Design', 'Cross-Platform Development', 'Interactive Interfaces', 'Digital Innovation',],
  creator: "Moinak Majumdar",
  publisher: "Vercel",
  metadataBase: new URL('https://moinak05.vercel.app/'),
  openGraph: {
    type: 'website',
    title: 'Moinak Majumdar | Web (MERN) & Flutter Developer',
    description: "Hey! this is @moinak05, A passionate self taught developer expert in bringing your digital ideas to life with creativity and precision.",
    images: 'https://avatars.githubusercontent.com/u/99950805?v=4',
    url: 'https://moinak05.vercel.app/',
  },
  icons: {icon: "/logo_bg.png", apple: 'logo_bg.png'}
}

interface props { children: ReactNode }

export default function RootLayout({ children }: props) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className='bg-white dark:bg-[#000011] text-gray-800 dark:text-gray-200'>
        <AppTheme>
          <Navbar />
          {children}
          <Footer />
        </AppTheme>
        <Analytics />
      </body>
    </html>
  )
}
