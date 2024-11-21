import type { Metadata } from "next";

import { BlogPostsSection } from "@/ui/modules/homepage/BlogPostsSection/BlogPostsSection";

export const metadata: Metadata = {
	title: "Dawid Ciborowski - Certyfikowany Trener Personalny Białystok",
	metadataBase: new URL("https://ciborowski-trener.pl"),
	themeColor: "#ffffff",
	alternates: {
		canonical: "https://ciborowski-trener.pl",
	},
	verification: {
		google: "ii-RoACLWzJ8MDPoGy-j1q6CpnUZDjMkvp8UO2nueag",
	},
	openGraph: {
		url: "https://ciborowski-trener.pl",
		title: "Dawid Ciborowski - Certyfikowany Trener Personalny Białystok",
		description:
			"Osiągnij swoje fitness cele z doświadczonym trenerem personalnym w Białymstoku. Specjalizuję się w treningach siłowych, planowaniu diet i wspieram w dążeniu do zdrowego stylu życia. Skontaktuj się ze mną już dziś i rozpocznij transformację swojego ciała i zdrowia!",
		images: "/og-image.jpg",
	},

	description:
		"Nazywam się Dawid. Jestem certyfikowanym trenerem personalnym z Białegostoku. Nie zależnie od wieku płci czy kondycji zapraszam Cię na wspólne treningi indywidualne. Razem możemy więcej!",
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
