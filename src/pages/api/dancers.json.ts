import { res } from "@/lib/http_response";
import type { APIRoute } from "astro";
import { db } from "db/client";
import { dancers_list } from "db/schema/dancers_list";

export const GET: APIRoute = async ({ request }) => {
	const dancers = await db.select().from(dancers_list)

	if (!dancers) return res("Not found", { status: 404 })

	return res(JSON.stringify(dancers), { status: 200 })
}
