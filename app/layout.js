import './globals.css'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ["400", "500", "700"] })

export const metadata = {
  title: 'Works?',
  description: 'by Frontend monster',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				} bg-black overscroll-none`}>{children}</body>
    </html>
  )
}
