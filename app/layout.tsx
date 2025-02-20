import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import QueryProvider from '@/context/query-provider'

const dm_sans = DM_Sans({
  variable: '--font-dm_sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Squeezy Auth with 2FA',
  description: 'Developed and maintained by Safrizal'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-background ${dm_sans.className} antialiased`}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
