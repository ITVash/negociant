import { prisma } from "@/prisma/prisma-client"
import { negoOrganization } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

/**
 * Gets an organization by its ID.
 * @param {NextRequest} req - The request object containing query parameters.
 * @returns {Promise<NextResponse>} - Response with the organization if found, otherwise an error message.
 * - 404 if the organization is not found.
 * - 500 if there is a server error.
 */
export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		const id = Number(params.id)
		const organization = await prisma.negoOrganization.findFirst({
			where: {
				id,
			},
		})

		if (!organization) {
			return NextResponse.json(
				{ error: "Организация не была найдена" },
				{ status: 404 },
			)
		}

		return NextResponse.json(organization)
	} catch (error) {
		console.log("[ORGANIZATION_GET] Server error", error)
		return NextResponse.json(
			{ message: "Не удалось получить организацию" },
			{ status: 500 },
		)
	}
}
/**
 * Updates an organization by its ID.
 * @param {NextRequest} req - The request object containing query parameters.
 * @returns {Promise<NextResponse>} - Response with the updated organization if found, otherwise an error message.
 * - 404 if the organization is not found.
 * - 500 if there is a server error.
 */
export async function PATCH(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		const id = Number(params.id)
		const data = (await req.json()) as negoOrganization

		const organization = await prisma.negoOrganization.update({
			where: {
				id,
			},
			data,
		})

		if (!organization) {
			return NextResponse.json(
				{ error: "Организация не была найдена" },
				{ status: 404 },
			)
		}

		return NextResponse.json(organization)
	} catch (error) {
		console.log("[ORGANIZATION_PATCH] Server error", error)
		return NextResponse.json(
			{ message: "Не удалось обновить организацию" },
			{ status: 500 },
		)
	}
}
/**
 * Deletes an organization by its ID.
 * @param {NextRequest} req - The request object containing query parameters.
 * @returns {Promise<NextResponse>} - Response with a success message if the organization is deleted, otherwise an error message.
 * - 404 if the organization is not found.
 * - 500 if there is a server error.
 */
export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		const id = Number(params.id)

		const organization = await prisma.negoOrganization.findUnique({
			where: {
				id,
			},
		})

		if (!organization) {
			return NextResponse.json(
				{ error: "Организация не была найдена" },
				{ status: 404 },
			)
		}

		await prisma.negoOrganization.delete({
			where: {
				id,
			},
		})

		return NextResponse.json({ message: "Организация была успешно удалена" })
	} catch (error) {
		console.log("[ORGANIZATION_DELETE] Server error", error)
		return NextResponse.json(
			{ message: "Не удалось удалить организацию" },
			{ status: 500 },
		)
	}
}
