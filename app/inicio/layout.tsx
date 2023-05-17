import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unai Canales Sirvent | Hallo!',
  description: 'Una página web a modo de presentación, portfolio, currículum... llámalo como quieras. Desarrollador de aplicaciones web y móvil. Hecha con NextJS, MongoDB, Prisma, Zustand, TailwindCSS...',
  keywords: ["unaicanales.vercel.app", "unai canales", "unai canales sirvent", "paginas web irun", "aplicaciones moviles irun", "unai irun", "irun programador", ""]
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="robots" content="index,nofollow" />
        <meta name="google-site-verification" content="0jKL_akBj_t9Rc5IGgQay1JtRG2uYXsKnjJ3TSqel3o" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
