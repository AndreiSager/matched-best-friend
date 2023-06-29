import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Doggo Match',
  description: 'Match the best man\'s bestfriend for you!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-center '>
          <div className='flex flex-wrap w-full max-w-screen-xl'>
            <Navbar/>
              <main>
                {children}
              </main>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
