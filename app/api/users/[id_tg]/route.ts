import { prisma } from "@/prisma/prisma-client"
import { negoUser } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

/**
 * Gets a user by its Telegram ID.
 * @param {NextRequest} _ - The request object containing query parameters.
 * @param {Object} params - The parameters object containing path parameters.
 * @param {string} params.id_tg - The Telegram ID of the user to be retrieved.
 * @returns {Promise<NextResponse>} - Response with the user if found, otherwise an error message.
 * - 404 if the user is not found.
 * - 500 if there is a server error.
 */
export async function GET(
	__: NextRequest,
	{ params }: { params: { id_tg: String } },
) {
	try {
		const id = Number(params.id_tg)
		const user = await prisma.negoUser.findFirst({
			where: { id_tg: id },
		})
		if (!user)
			return NextResponse.json(
				{
					message: "Пользователь не был найден в базе данных!",
				},
				{ status: 404 },
			)
		return NextResponse.json(user)
	} catch (error) {
		return NextResponse.json(
			{ message: "Ошибка сервера", error },
			{ status: 500 },
		)
	}
}
/**
 * Updates a user by its ID.
 * @param {NextRequest} req - The request object containing query parameters.
 * @returns {Promise<NextResponse>} - Response with the updated user if found, otherwise an error message.
 * - 400 if the ID is not provided.
 * - 404 if the user is not found.
 * - 500 if there is a server error.
 */
export async function PATCH(req: NextRequest) {
	try {
		const id = req.nextUrl.searchParams.get("id")
		const data = (await req.json()) as negoUser
		if (!id)
			return NextResponse.json({ message: "Не коректный ID" }, { status: 400 })
		const user = await prisma.negoUser.findFirst({ where: { id: Number(id) } })
		if (!user)
			return NextResponse.json({ message: "Пользователь не был найден" })
		await prisma.negoUser.update({ where: { id: Number(id) }, data })
		return NextResponse.json(user)
	} catch (error) {
		return NextResponse.json(
			{ message: "Ошибка сервера", error },
			{ status: 500 },
		)
	}
}
/**
 * Deletes a user by its ID.
 * @param {NextRequest} req - The request object containing query parameters.
 * @returns {Promise<NextResponse>} - Response with a success message if the user is deleted, otherwise an error message.
 * - 400 if the ID is not provided.
 * - 404 if the user is not found.
 * - 500 if there is a server error.
 */
export async function DELETE(req: NextRequest) {
	try {
		const id = req.nextUrl.searchParams.get("id")
		if (!id)
			return NextResponse.json({ message: "Не коректный ID" }, { status: 400 })
		await prisma.negoUser.delete({ where: { id: Number(id) } })
		return NextResponse.json({ message: "Пользователь удален" })
	} catch (error) {
		return NextResponse.json(
			{ message: "Ошибка сервера", error },
			{ status: 500 },
		)
	}
}
