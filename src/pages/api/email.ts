import { res } from "@/lib/http_response";
import type { APIRoute } from "astro";
import { z } from "astro:content";
import { db } from "db/client";
import { email_list } from "db/schema/email_list";

const Email = z.string().email()

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get('content-type') !== 'application/json') {
		throw new Error('Invalid content type')
	}

	const { email } = await request.json()

	if (!email) {
		return res("Email is required", { status: 400 })
	}


	const safeEmail = Email.safeParse(email)

	if (!safeEmail.success) {
		return res("Invalid email", { status: 400 })
	}

	// Insert email into database
	try {
		await db.insert(email_list).values({ email: safeEmail.data })

	} catch (e) {

		return res("Email already exists!", { status: 400 })
	}


	return res("OK", { status: 200 })

}

