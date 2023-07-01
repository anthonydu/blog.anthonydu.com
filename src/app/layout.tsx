import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  themeColor: "#1E293B"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-800 text-slate-200"}>
        <header className="fixed top-0 w-full h-16 flex items-center pl-5 backdrop-blur border-b border-slate-700 text-2xl z-50">
          <Link href="/">Anthony Du&apos;s Blog</Link>
        </header>
        <main className="py-36 container max-w-3xl mx-auto px-10">
          {children}
        </main>
      </body>
    </html>
  )
}
