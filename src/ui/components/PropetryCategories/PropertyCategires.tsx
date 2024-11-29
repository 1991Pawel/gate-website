"use client";

import { useState } from "react";
import style from "./PropertyCategiries.module.css";
import cx from "classnames";
import { type GetAllPostsQuery } from "@/gql/graphql";
import PropertyCard from "../PropertyCard/PropertyCard";
type Gate = GetAllPostsQuery["gates"][0];

interface PropertyCardProps {
	offers: Gate[];
}

const CATEGORIES = {
	GATES: "bramy",
	ENGINE: "silniki",
};

const PropertyCategires = ({ offers }: PropertyCardProps) => {
	const [activeCategory, setActiveCategory] = useState(CATEGORIES.GATES);
	const categories = Object.values(CATEGORIES);

	const gates = offers.filter((offer) => offer.category === CATEGORIES.GATES);
	const other = offers.filter((offer) => offer.category !== CATEGORIES.GATES);
	const filteredOffers = activeCategory === CATEGORIES.GATES ? gates : other;

	return (
		<div className={style.containerOffers}>
			<div className={style.buttons}>
				{categories.map((category) => (
					<button
						key={category}
						className={cx(style.button, activeCategory === category && style.buttonActive)}
						onClick={() => setActiveCategory(category)}
					>
						{category}
					</button>
				))}
			</div>
			<div className={style.offersList}>
				{filteredOffers.map((offer) => (
					<PropertyCard key={offer.title} offer={offer} />
				))}
			</div>
		</div>
	);
};

export default PropertyCategires;
