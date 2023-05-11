import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unai Canales | Portfolio',
  description: 'Portfolio de Unai Canales, desarrollador de aplicaciones multiplataforma.',
  keywords: ["unaicanales.vercel.app", "unai canales", "unai canales sirvent", "paginas web irun"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
