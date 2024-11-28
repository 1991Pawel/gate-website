import style from "./blogPostsSection.module.css";
import cx from "classnames";
import { Container } from "@/ui/components/Container/Contianer";
import { getClient } from "@/lib/client";
import { type GetAllPostsQuery, GetAllPostsDocument } from "@/gql/graphql";
import Link from "next/link";
import Size from "@/ui/svgs/size.svg";
import PhoneIcon from "@/ui/svgs/phone.svg";

export async function BlogPostsSection() {
	const { data } = await getClient().query<GetAllPostsQuery>({
		query: GetAllPostsDocument,
	});

	const gates = data?.gates;
	const priceFormat = (price: number) => new Intl.NumberFormat("pl-PL").format(price);

	return (
		<section id="blog" className={style.offersSection}>
			<Container>
				<br />
				<br />
				<div className={style.offertTitle}>Bramy</div>
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
								<div className={style.bottom}>
									<div className={style.row}>
										<h3 className={style.offerTitle}>{offer?.title}</h3>
										{offer?.price && (
											<p className={style.offerPrice}>{priceFormat(offer.price)} zł</p>
										)}
									</div>
									<div className={style.bottomRow}>
										{offer?.width && (
											<div className={style.iconWrapper}>
												<Size />
												{offer.width} x {offer.height}
											</div>
										)}
										<div className={style.phoneLink}>
											<PhoneIcon width="24" height="24" />
											<a href="tel:+48667098271">Rezerwuj</a>
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</Container>
		</section>
	);
}
