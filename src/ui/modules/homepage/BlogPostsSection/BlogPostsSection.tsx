import style from "./blogPostsSection.module.css";
import cx from "classnames";
import { Container } from "@/ui/components/Container/Contianer";
import { getClient } from "@/lib/client";
import { type GetAllPostsQuery, GetAllPostsDocument } from "@/gql/graphql";
import Link from "next/link";

export async function BlogPostsSection() {
	const { data } = await getClient().query<GetAllPostsQuery>({
		query: GetAllPostsDocument,
	});

	const gates = data?.gates;

	return (
		<section id="blog" className={style.offersSection}>
			<Container>
				<div className={style.offertTitle}>Oferty</div>
				<div className={style.offersList}>
					{gates.map((offer) => (
						<Link href={`/brama/${offer.id}`} key={offer.title}>
							<div className={style.offerItem}>
								<div
									className={cx(
										style.imageWrapper,
										offer?.reservation ? style.imageWrapperActive : null,
									)}
								>
									{offer?.images[0]?.url && (
										<img
											src={offer?.images[0].url}
											alt={`${offer.title}`}
											className={style.offerImage}
										/>
									)}
									{offer?.reservation && <div className={style.reservation}>Rezerwacja</div>}
								</div>
								<div>
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
						</Link>
					))}
				</div>
			</Container>
		</section>
	);
}
