"use server"
import { prisma } from "@/prisma/prisma-client"
import { negoContakts } from "@prisma/client"

export const OrganizationContakts = async (id: number) => {
	try {
		const data = await prisma.negoContakts.findMany({
			where: { organizationId: id },
		})
		return data
	} catch (error) {
		console.error(error)
	}
}
