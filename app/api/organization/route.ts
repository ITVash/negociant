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
	})

	return NextResponse.json(organizations)
}

/**
 * Creates a new organization
 * @param {Request} req
 * @returns {Promise<NextResponse>} Response with created organization
 */
export async function POST(req: NextRequest) {
	try {
		const body = await req.json()

		const organization = await prisma.negoOrganization.create({
			data: body,
		})
		return NextResponse.json(organization, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ message: "Ошибка сервера", error },
			{ status: 500 },
		)
	}
}
