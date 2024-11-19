import { prisma } from "@/prisma/prisma-client"
import { negoWork } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

/**
 * Retrieves a work item by its ID.
 * @param {NextRequest} req - The request object containing query parameters.
 * @returns {Promise<NextResponse>} - Response with the work item if found, otherwise an error message.
 * - 400 if the ID is not provided.
 * - 404 if the work item is not found.
 * - 500 if there is a server error.
 */
export async function GET(req: NextRequest) {
	try {
		const id = req.nextUrl.searchParams.get("id")
		if (!id)
			return NextResponse.json({ message: "Не коректный ID" }, { status: 400 })
		const work = await prisma.negoWork.findFirst({ where: { id: Number(id) } })
		if (!work)
			return NextResponse.json({ message: "Цели не найдены" }, { status: 404 })
		return NextResponse.json(work)
	} catch (error) {
		return NextResponse.json({ message: "Ошибка сервера" }, { status: 500 })
	}
}
/**
 * Updates a work item by its ID.
 * @param {NextRequest} req - The request object containing query parameters.
 * @returns {Promise<NextResponse>} - Response with the updated work item, otherwise an error message.
 * - 400 if the ID is not provided.
 * - 404 if the work item is not found.
 * - 500 if there is a server error.
 */
export async function PATCH(req: NextRequest) {
	try {
		const id = req.nextUrl.searchParams.get("id")
		const data = (await req.json()) as negoWork
		if (!id)
			return NextResponse.json({ message: "Не коректный ID" }, { status: 400 })
		const work = await prisma.negoWork.findFirst({ where: { id: Number(id) } })
		if (!work)
			return NextResponse.json({ message: "Цели не найдены" }, { status: 404 })
		await prisma.negoWork.update({ where: { id: Number(id) }, data })
		return NextResponse.json(work)
	} catch (error) {
		return NextResponse.json(
			{ message: "Ошибка сервера", error },
			{ status: 500 },
		)
	}
}
/**
 * Deletes a work item by its ID.
 * @param {NextRequest} req - The request object containing query parameters.
 * @returns {Promise<NextResponse>} - Response with a success message if the work item is deleted, otherwise an error message.
 * - 400 if the ID is not provided.
 * - 500 if there is a server error.
 */
export async function DELETE(req: NextRequest) {
	try {
		const id = req.nextUrl.searchParams.get("id")
		if (!id)
			return NextResponse.json({ message: "Не коректный ID" }, { status: 400 })
		await prisma.negoWork.delete({ where: { id: Number(id) } })
		return NextResponse.json({ message: "Цель удалена" }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ message: "Ошибка сервера", error },
			{ status: 500 },
		)
	}
}
