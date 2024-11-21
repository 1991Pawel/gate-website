import { type NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "../../../lib/nodemailer";

interface EmailData {
	email: string;
	message: string;
	subject: string;
	name: string;
	phone: string;
}
export async function POST(request: NextRequest): Promise<Response> {
	try {
		const json: EmailData = (await request.json()) as EmailData;

		const res = await transporter.sendMail({
			...mailOptions,
			subject: json.subject,
			html: `<h1>Email od : ${json.email}</h1><p>${json.name}</p><p>${json.message}</p>${
				json.phone ? `Numer telefonu: ${json.phone}` : null
			}`,
		});
		return NextResponse.json({ message: "ok", data: res }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "error", error: error }, { status: 500 });
	}
}
