import { prisma } from "@/prisma/prisma-client"
import { ITUser } from "@/shared/@types"
import { negoUser, negoUserRole } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

/**
 * Retrieves all users.
 * @returns {Promise<NextResponse>} Response with all users if found, otherwise an error message.
 * - 404 if users are not found.
 * - 500 if there is a server error.
 */
export async function GET() {
	try {
		const users = await prisma.negoUser.findMany()
		if (!users)
			return NextResponse.json({ message: "Пользователи не были найдены" })
		return NextResponse.json(users)
	} catch (error) {
		return NextResponse.json({ message: "Ошибка сервера", error })
	}
}

export async function POST(req: NextRequest) {
	const data: negoUser = await req.json()
	try {
		const user = await prisma.negoUser.create({ data })
		if (!user)
			return NextResponse.json({ message: "Пользователь не был создан" })
		return NextResponse.json(user)
	} catch (error) {
		return NextResponse.json({ message: "Ошибка сервера", error })
	}
}
