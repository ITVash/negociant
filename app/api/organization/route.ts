import { prisma } from "@/prisma/prisma-client"
import { NextRequest, NextResponse } from "next/server"

/**
 * Gets all organizations
 * @returns {Promise<NextResponse>} Response with all organizations
 */
export async function GET() {
	const organizations = await prisma.negoOrganization.findMany({
		include: {
			contakts: true,
		},
		orderBy: { createdAt: "desc" },
	})

	return NextResponse.json(organizations)
}

/**
 * Creates a new organization
 * @param {NextRequest} req - The request object containing the organization data
 * @returns {Promise<NextResponse>} Response with the created organization if found, otherwise an error message
 * - 404 if the organization is not created
 * - 500 if there is a server error
 */
export async function POST(req: NextRequest) {
	try {
		const body = await req.json()

		const organization = await prisma.negoOrganization.create({
			data: {
				address: body.address,
				name: body.name,
				contakts: {
					create: body.contakts,
				},
			},
			include: {
				contakts: true,
			},
		})
		return NextResponse.json(organization, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ message: "Ошибка сервера", error },
			{ status: 500 },
		)
	}
}
