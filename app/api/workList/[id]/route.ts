import { prisma } from "@/prisma/prisma-client"
import { negoWorkList } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

/**
 * Retrieves a work list by its ID.
 * @param {NextRequest} req - The request object containing query parameters.
 * @param {Object} params - The parameters object containing path parameters.
 * @returns {Promise<NextResponse>} - Response with the work list if found, otherwise an error message.
 * - 404 if the work list is not found.
 * - 500 if there is a server error.
 */

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		const id = Number(params.id)
		const workList = await prisma.negoWorkList.findFirst({
			where: { id: id },
		})
		if (!workList) {
			return NextResponse.json(
				{ message: "Цель не была найдена" },
				{ status: 404 },
			)
		}
		return NextResponse.json(workList)
	} catch (error) {
		return NextResponse.json(
			{ message: "Ошибка сервера", error },
			{ status: 500 },
		)
	}
}

/**
 * Updates a work list by its ID.
 * @param {NextRequest} req - The request object containing query parameters and body.
 * @param {Object} params - The parameters object containing path parameters.
 * @returns {Promise<NextResponse>} - Response with the updated work list if found, otherwise an error message.
 * - 404 if the work list is not found.
 * - 500 if there is a server error.
 */
export async function PATCH(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		const id = Number(params.id)
		const data = (await req.json()) as negoWorkList
		const workList = await prisma.negoWorkList.update({
			where: { id: id },
			data,
		})
		if (!workList) {
			return NextResponse.json(
				{ message: "Цель не была обновлена" },
				{ status: 404 },
			)
		}
		return NextResponse.json(workList)
	} catch (error) {
		return NextResponse.json(
			{ message: "Ошибка сервера", error },
			{ status: 500 },
		)
	}
}

/**
 * Deletes a work list by its ID.
 * @param {NextRequest} req - The request object containing query parameters.
 * @param {Object} params - The parameters object containing path parameters.
 * @returns {Promise<NextResponse>} - Response with a success message if the work list is deleted, otherwise an error message.
 * - 404 if the work list is not found.
 * - 500 if there is a server error.
 */
export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		const id = Number(params.id)
		await prisma.negoWorkList.delete({ where: { id: id } })
		return NextResponse.json({ message: "Цель удалена" }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ message: "Ошибка сервера", error },
			{ status: 500 },
		)
	}
}
