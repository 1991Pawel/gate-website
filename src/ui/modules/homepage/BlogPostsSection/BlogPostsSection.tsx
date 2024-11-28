import style from "./blogPostsSection.module.css";

import { Container } from "@/ui/components/Container/Contianer";
import { getClient } from "@/lib/client";
import { type GetAllPostsQuery, GetAllPostsDocument } from "@/gql/graphql";

import PropertyCard from "@/ui/components/PropertyCard/PropertyCard";

export async function BlogPostsSection() {
	const { data } = await getClient().query<GetAllPostsQuery>({
		query: GetAllPostsDocument,
	});

	const gates = data?.gates;

	return (
		<section id="blog" className={style.offersSection}>
			<Container>
				<br />
				<br />
				<div className={style.offertTitle}>Bramy</div>
				<div className={style.offersList}>
					{gates.map((offer) => (
						<PropertyCard key={offer.title} offer={offer} />
					))}
				</div>
			</Container>
		</section>
	);
}
