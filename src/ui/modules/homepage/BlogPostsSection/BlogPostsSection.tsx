import style from "./blogPostsSection.module.css";

import { getClient } from "@/lib/client";
import { type GetAllPostsQuery, GetAllPostsDocument } from "@/gql/graphql";

import PropertyCategires from "@/ui/components/PropetryCategories/PropertyCategires";

export async function BlogPostsSection() {
	const { data } = await getClient().query<GetAllPostsQuery>({
		query: GetAllPostsDocument,
	});

	const gates = data?.gates;

	return (
		<section id="blog" className={style.offersSection}>
			<div className={style.offersWrapper}>
				<div className={style.offersList}>
					<PropertyCategires offers={gates} />
				</div>
			</div>
		</section>
	);
}
