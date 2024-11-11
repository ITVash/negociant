import { prisma } from "@/prisma/prisma-client"
import { ITUser } from "@/shared/@types"
import { negoUser, negoUserRole } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
	const users = await prisma.negoUser.findMany()
	return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
	const data: negoUser = await req.json()
	console.log(data)
	try {
		const user = await prisma.negoUser.create({ data })
		return NextResponse.json(user)
	} catch (error) {
		return NextResponse.json({ message: "Ошибка сервера", error })
	}
}
