"use client";
import { useRouter } from "next/navigation";

import style from "./PropertyCard.module.css";
import Size from "@/ui/svgs/size.svg";
import cx from "classnames";
import { type GetAllPostsQuery } from "@/gql/graphql";

type Gate = GetAllPostsQuery["gates"][0];

interface PropertyCardProps {
	offer: Gate;
}

const PropertyCard = ({ offer }: PropertyCardProps) => {
	const router = useRouter();
	const priceFormat = (price: number) => new Intl.NumberFormat("pl-PL").format(price);
	return (
		<div onClick={() => router.push(`/brama/${offer.id}`)} key={offer.title}>
			<div className={style.offerItem}>
				<div
					className={cx(style.imageWrapper, offer?.reservation ? style.imageWrapperActive : null)}
				>
					{offer?.images[0]?.url && (
						<img src={offer?.images[0].url} alt={`${offer.title}`} className={style.offerImage} />
					)}
					{offer?.reservation && <div className={style.reservation}>Rezerwacja</div>}
				</div>
				<div className={style.bottom}>
					<div className={style.row}>
						<h3 className={style.offerTitle}>{offer?.title}</h3>
						{/* {offer?.price && <p className={style.offerPrice}>{priceFormat(offer.price)} zł</p>} */}
					</div>
					<div className={style.bottomRow}>
						{offer?.width && (
							<div className={style.iconWrapper}>
								<Size />
								{offer.width} x {offer.height}
							</div>
						)}
						{offer?.price && <p className={style.offerPrice}>{priceFormat(offer.price)} zł</p>}
						{/* {!offer?.reservation && (
							<div onClick={(e) => e.stopPropagation()} className={style.phoneLink}>
								<PhoneIcon width="24" height="24" />
								<a href="tel:+48667098271">Rezerwuj</a>
							</div>
						)} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
