import { prisma } from "@/prisma/prisma-client"
import { negoContakts } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

/**
 * Retrieves a contact by its ID.
 * @param {NextRequest} req - The request object containing query parameters.
 * @param {Object} params - The parameters object containing path parameters.
 * @returns {Promise<NextResponse>} - Response with the contact if found, otherwise an error message.
 * - 404 if the contact is not found.
 * - 500 if there is a server error.
 */
export async function GET(
	req: NextRequest,
	params: { params: { id: string } },
) {
	try {
		const id = Number(params.params.id)

		const contact = await prisma.negoContakts.findFirst({
			where: {
				id,
			},
		})

		if (!contact) {
			return NextResponse.json(
				{ error: "Контакт не был найден" },
				{ status: 404 },
			)
		}

		return NextResponse.json(contact, { status: 200 })
	} catch (error) {
		console.log("[CONTACT_GET] Server error", error)
		return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 })
	}
}

/**
 * Updates a contact by its ID.
 * @param {NextRequest} req - The request object containing query parameters.
 * @param {Object} params - The parameters object containing path parameters.
 * @returns {Promise<NextResponse>} - Response with the updated contact if found, otherwise an error message.
 * - 404 if the contact is not found.
 * - 500 if there is a server error.
 */
export async function PATCH(
	req: NextRequest,
	params: { params: { id: string } },
) {
	try {
		const id = Number(params.params.id)
		const data = (await req.json()) as negoContakts
		const contact = await prisma.negoContakts.update({
			where: {
				id,
			},
			data,
		})
		return NextResponse.json(contact, { status: 200 })
	} catch (error) {
		console.log("[CONTACT_PUT] Server error", error)
		return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 })
	}
}

/**
 * Deletes a contact by its ID.
 * @param {NextRequest} req - The request object.
 * @param {Object} params - The parameters object containing path parameters.
 * @param {string} params.params.id - The ID of the contact to be deleted.
 * @returns {Promise<NextResponse>} - A response object with a success message if the contact is deleted, otherwise an error message.
 * - 200 if the contact is successfully deleted.
 * - 500 if there is a server error.
 */
export async function DELETE(
	req: NextRequest,
	params: { params: { id: string } },
) {
	try {
		const id = Number(params.params.id)
		await prisma.negoContakts.delete({
			where: {
				id,
			},
		})
		return NextResponse.json({ message: "Контакт удален" }, { status: 200 })
	} catch (error) {
		console.log("[CONTACT_DELETE] Server error", error)
		return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 })
	}
}
