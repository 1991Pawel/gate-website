import { getClient } from "@/lib/client";
import { type GetPostBySlugQuery, GetPostBySlugDocument } from "@/gql/graphql";
import Link from "next/link";
import BackArrow from "@/ui/svgs/back-arrow.svg";
import style from "./page.module.css";
export const revalidate = 0;
export default async function BlogPost({ params }: { params: { slug: string } }) {
	const { data } = await getClient().query<GetPostBySlugQuery>({
		query: GetPostBySlugDocument,

		variables: { slug: params.slug },
	});

	const images = data.gate?.images;
	console.log(images);

	const render = data.gate?.description;
	const title = data.gate?.title;
	console.log(render);

	return (
		<main className="  flex min-h-screen flex-col items-center justify-between bg-white p-4">
			<div className={style.itemsContainer}>
				<div className={style.backLink}>
					<Link className="mt-10 flex gap-2" href="/">
						<BackArrow className="h-6 w-6 rotate-180" />
						Wróć
					</Link>
				</div>
				<br />
				<h1 className=" text-4xl font-semibold text-dark">{title}</h1>

				{render && (
					<div
						className="text-2 1xl prose
						mt-5 lg:prose-xl"
						dangerouslySetInnerHTML={{ __html: render.html }}
					/>
				)}
				<br />
				<div className={style.images}>
					{images && images.map((img, i) => <img key={i} src={img.url} />)}
				</div>
			</div>
		</main>
	);
}
