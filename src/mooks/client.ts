import type { PRODUCCIONES } from "@/types/schemas.ts"
import { producciones } from "./productions.ts"


export const getProductionInfo = async (id?: string): Promise<PRODUCCIONES | undefined> => {
	if (!id) throw new Error("No id provided")
	const data = producciones.find((production) => production.id === id)

	return data
}

