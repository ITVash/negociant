import { prisma } from "@/prisma/prisma-client"
import { negoContakts } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

/**
 * Retrieves all contacts.
 * @returns {Promise<NextResponse>} Response with all contacts if found, otherwise an error message.
 * - 404 if contacts are not found.
 * - 500 if there is a server error.
 */
export async function GET() {
	try {
		const contacts = await prisma.negoContakts.findMany()
		if (!contacts) {
			return NextResponse.json(
				{ error: "Контакты не были найдены" },
				{ status: 404 },
			)
		}
		return NextResponse.json(contacts)
	} catch (error) {
		console.log("[CONTACT_GET] Server error", error)
		return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 })
	}
}
/**
 * Creates a new contact.
 * @param {NextRequest} req - The request object containing the contact data.
 * @returns {Promise<NextResponse>} Response with the created contact if found, otherwise an error message.
 * - 404 if the contact is not created.
 * - 500 if there is a server error.
 */

export async function POST(req: NextRequest) {
	try {
		const data = (await req.json()) as negoContakts
		const contact = await prisma.negoContakts.create({ data })
		if (!contact) {
			return NextResponse.json(
				{ error: "Контакт не был создан" },
				{ status: 404 },
			)
		}
		return NextResponse.json(contact, { status: 200 })
	} catch (error) {
		console.log("[CONTACT_POST] Server error", error)
		return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 })
	}
}
