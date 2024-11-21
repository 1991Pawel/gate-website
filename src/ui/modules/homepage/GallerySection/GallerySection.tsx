import style from "./gallerySection.module.css";
const galleryImage = [
	{
		mobile: "/assets/home/gallery-01-mobile.jpg",
		desktop: "/assets/home/gallery-01-desktop.jpg",
	},
	{
		mobile: "/assets/home/gallery-02-mobile.jpg",
		desktop: "/assets/home/gallery-02-desktop.jpg",
	},
	{
		mobile: "/assets/home/gallery-03-mobile.jpg",
		desktop: "/assets/home/gallery-03-desktop.jpg",
	},
];

export const GallerySection = () => (
	<section className={style.gallery}>
		<div className={style.galleryInner}>
			{galleryImage.map((image, index) => (
				<div key={index} className={style.galleryImageWrapper}>
					<picture>
						<source media="(min-width: 720px)" srcSet={image.desktop} />
						<img src={image.mobile} alt="Dawid Ciborowski Trener Białystok" />
					</picture>
				</div>
			))}
		</div>
	</section>
);
