import { res } from "@/lib/http_response";
import type { APIRoute } from "astro";
import { db } from "db/client";
import { critics_list } from "db/schema/critics_list";

export const GET: APIRoute = async ({ request }) => {
	const critics = await db.select().from(critics_list)

	if (!critics) return res("Not found", { status: 404 })

	return res(JSON.stringify(critics), { status: 200 })
}
