import { getClient } from "@/lib/client";
import { type GetPostBySlugQuery, GetPostBySlugDocument } from "@/gql/graphql";

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
		<main className=" flex min-h-screen flex-col items-center justify-between bg-white p-4">
			<div className="container mx-auto">
				<h1 className=" mt-12 text-4xl font-semibold text-dark">{title}</h1>

				{render && (
					<div
						className="text-2 1xl prose
						mt-20 lg:prose-xl"
						dangerouslySetInnerHTML={{ __html: render.html }}
					/>
				)}
				<br />
				{images && images.map((img, i) => <img key={i} src={img.url} width={1000} height={500} />)}
			</div>
		</main>
	);
}
