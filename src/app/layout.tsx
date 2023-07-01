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
        <main className="py-24 container max-w-3xl mx-auto px-10">
          {children}
        </main>

        {/* Default Statcounter code for Anthony Du's Blog https://blog.anthonydu.com */}
        <script type="text/javascript">
          var sc_project=12896567; 
          var sc_invisible=1; 
          var sc_security=`a85b9a10`; 
        </script>
        <script type="text/javascript" src="https://www.statcounter.com/counter/counter.js"async></script>
        {/* End of Statcounter Code */}

        <script async data-id="101416538" src="//static.getclicky.com/js"></script>
        <script data-goatcounter="https://anthonydu.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
        <script defer src="https://service.watchthem.live/pixel/ssaLU3aUddUUaaUa"></script>
      </body>
    </html>
  )
}
