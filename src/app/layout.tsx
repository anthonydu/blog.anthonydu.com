import "@/app/globals.scss";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: "%s | Anthony Du's Blog",
    default: "Anthony Du's Blog",
  },
  themeColor: "#1E293B",
  metadataBase: new URL("https://blog.anthonydu.com"),
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: true,
      follow: true,
      noarchive: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-slate-800 font-sans text-slate-200"}>
        <header className="fixed top-0 z-50 flex h-16 w-full items-center border-b border-slate-700 pl-5 text-2xl backdrop-blur">
          <Link href="/">Anthony Du&apos;s Blog</Link>
        </header>
        <main className="container mx-auto my-16 max-w-3xl px-6">
          {children}
        </main>

        {/* Default Statcounter code for Anthony Du's Blog https://blog.anthonydu.com */}
        <Script id="statcounter">
          {`
            var sc_project=12896567; 
            var sc_invisible=1; 
            var sc_security="a85b9a10"; 
          `}
        </Script>
        <Script
          src="https://www.statcounter.com/counter/counter.js"
          async
        ></Script>
        {/* End of Statcounter Code */}

        {/* Hotjar Tracking Code for https://blog.anthonydu.com */}
        <Script id="hotjar">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3557110,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        <Script
          async
          data-id="101416538"
          src="//static.getclicky.com/js"
        ></Script>
        <Script
          data-goatcounter="https://anthonydu.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></Script>
      </body>
    </html>
  );
}
