import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-800 text-slate-200"}>
        <header className="fixed top-0 w-full h-16 flex items-center pl-5 backdrop-blur border-b border-slate-700 text-2xl">
          <a href="/">Anthony Du&apos;s Blog</a>
        </header>
        <main className="pt-36 container mx-auto">
          <div className="mx-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
