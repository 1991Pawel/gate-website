import style from "./blogPostsSection.module.css";
import cx from "classnames";
import { Container } from "@/ui/components/Container/Contianer";
import { getClient } from "@/lib/client";
import { type GetAllPostsQuery, GetAllPostsDocument } from "@/gql/graphql";

export async function BlogPostsSection() {
	const { data } = await getClient().query<GetAllPostsQuery>({
		query: GetAllPostsDocument,
	});

	const gates = data?.gates;
	const firstImageUrl = gates[0]?.images[0]?.url;

	console.log(data);

	return (
		<section id="blog" className={style.offersSection}>
			<Container>
				<div className={style.offertTitle}>Oferty</div>
				<div className={style.offersList}>
					{gates.map((offer) => (
						<div key={offer.title} className={style.offerItem}>
							<div
								className={cx(
									style.imageWrapper,
									offer?.reservation ? style.imageWrapperActive : null,
								)}
							>
								{firstImageUrl && (
									<img src={firstImageUrl} alt={`${offer.title}`} className={style.offerImage} />
								)}
								{offer?.reservation && <div className={style.reservation}>Rezerwacja</div>}
							</div>
							<div className="offerListContent">
								<div className={style.row}>
									<h3 className={style.offerTitle}>{offer.title}</h3>
									<p className={style.offerPrice}>Cena: {offer.price} PLN</p>
								</div>

								{/* {offer?.reservation && <div>Rezerwacja</div>} */}
								{/* {offer?.width && <div>długość {offer.width} </div>}
								{offer?.height && <div>wysokość {offer.height} </div>} */}
								{offer?.width && (
									<div>
										{" "}
										{offer.width} x {offer.height}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
