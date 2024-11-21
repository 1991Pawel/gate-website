import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
	try {
		const url = `https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;
		const res = await fetch(url);
		const data: unknown = await res.json();
		return NextResponse.json({ message: "ok", data }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "error", error: error }, { status: 500 });
	}
}
