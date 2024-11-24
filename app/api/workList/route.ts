import { prisma } from "@/prisma/prisma-client"
import { negoWorkList } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

/**
 * Retrieves all work lists.
 * @returns {Promise<NextResponse>} Response with all work lists if found, otherwise an error message.
 * - 404 if work lists are not found.
 * - 500 if there is a server error.
 */
export async function GET() {
	try {
		const workList = await prisma.negoWorkList.findMany()
		if (!workList)
			return NextResponse.json(
				{ message: "Цели не были найдены" },
				{ status: 404 },
			)
		return NextResponse.json(workList, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ message: "Ошибка сервера", error },
			{ status: 500 },
		)
	}
}
/**
 * Creates a new work list.
 * @param {NextRequest} req - The request object containing query parameters.
 * @returns {Promise<NextResponse>} - Response with the created work list if found, otherwise an error message.
 * - 400 if the work list is not valid.
 * - 404 if the work list is not found.
 * - 500 if there is a server error.
 */
export async function POST(req: NextRequest) {
	try {
		const data = (await req.json()) as negoWorkList
		const workList = await prisma.negoWorkList.create({ data })
		if (!workList)
			return NextResponse.json(
				{ message: "Цель не была создана" },
				{ status: 404 },
			)
		return NextResponse.json(workList, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ message: "Ошибка сервера", error },
			{ status: 500 },
		)
	}
}
