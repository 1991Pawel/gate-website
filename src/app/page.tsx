import type { Metadata } from "next";

import { BlogPostsSection } from "@/ui/modules/homepage/BlogPostsSection/BlogPostsSection";

export const metadata: Metadata = {
	title: "Bramy Przemysłowe Białystok - Wytrzymałe i Funkcjonalne Bramy dla Firm",
	metadataBase: new URL("https://bramypodlasie.pl"),
	themeColor: "#ffffff",
	alternates: {
	  canonical: "https://bramypodlasie.pl",
	},
	verification: {
	  google: "ii-RoACLWzJ8MDPoGy-j1q6CpnUZDjMkvp8UO2nueag", // (Ensure to update this with your actual Google verification code)
	},
	openGraph: {
	  url: "https://bramypodlasie.pl",
	  title: "Bramy Przemysłowe Białystok - Wytrzymałe i Funkcjonalne Bramy dla Firm",
	  description:
		"Oferujemy bramy przemysłowe w Białymstoku, zapewniające niezawodność i bezpieczeństwo w obiektach przemysłowych, magazynach oraz firmach. Nasze bramy charakteryzują się wysoką jakością wykonania, funkcjonalnością i trwałością. Sprawdź naszą ofertę i skontaktuj się z nami, aby dopasować bramę do Twoich potrzeb.",
	  images: "/og-image.jpg", // (Ensure you add a suitable image for Open Graph)
	},
	description:
	  "Bramy Podlasie specjalizuje się w produkcji i montażu bram przemysłowych w Białymstoku. Nasze bramy zapewniają bezpieczeństwo, funkcjonalność i efektywność w obiektach przemysłowych. Wykonujemy bramy dostosowane do indywidualnych potrzeb każdej firmy, zapewniając długowieczność i niezawodność naszych produktów.",
  };
export const revalidate = 1;

export default function Home() {
	return (
		<main>
			<BlogPostsSection />
			{/* <IntroSection />
			<SocialBar />
			<WelcomeSection />
			<GallerySection />
			<AboutSection />
			<OffersSection />
			<WhyMeSection />
			<BlogPostsSection />
			<ContactSection />
			<FormSection /> */}
		</main>
	);
}
