"use client";
import "./globals.css";

import Script from "next/script";
import { Montserrat } from "next/font/google";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { Header } from "@/ui/components/Header/Header";
import { Footer } from "@/ui/components/Footer/Footer";
import { FacebookPixel } from "@/ui/components/FacebookPixel/FacebookPixel";
const openSans = Montserrat({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className={openSans.className} lang="pl">
			<Script
				id="ga_01"
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY}`}
			/>

			<Script id="ga_02" strategy="lazyOnload">
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY}', {
                    page_path: window.location.pathname,
                    });
                `}
			</Script>
			<body>
				<div className="layout">
					<Header />
					<ApolloWrapper>{children}</ApolloWrapper>
					{/* <Footer /> */}
				</div>
				<FacebookPixel />
			</body>
		</html>
	);
}
