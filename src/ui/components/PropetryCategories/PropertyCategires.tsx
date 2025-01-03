"use client";

import { useState, useEffect } from "react";
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
	ENGINE: "Części",
};

const PropertyCategires = ({ offers }: PropertyCardProps) => {
	const [activeCategory, setActiveCategory] = useState(
		() =>
			(typeof window !== "undefined" && window.sessionStorage.getItem("activeCategory")) ||
			CATEGORIES.GATES,
	);
	const categories = Object.values(CATEGORIES);

	const gates = offers.filter((offer) => offer.category === CATEGORIES.GATES);
	const other = offers.filter((offer) => offer.category !== CATEGORIES.GATES);
	const filteredOffers = activeCategory === CATEGORIES.GATES ? gates : other;

	const sortedOffers = (items: Gate[]): Gate[] => {
		return items.sort((a: Gate, b: Gate) => {
			if (a.reservation && !b.reservation) return 1;
			if (!a.reservation && b.reservation) return -1;
			return 0;
		});
	};

	const offersToDisplay = sortedOffers(filteredOffers);

	useEffect(() => {
		sessionStorage.setItem("activeCategory", activeCategory);

		window.scrollTo(0, 0);
	}, [setActiveCategory, activeCategory]);

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
				{offersToDisplay.map((offer, i) => (
					<PropertyCard key={i} offer={offer} />
				))}
			</div>
		</div>
	);
};

export default PropertyCategires;
