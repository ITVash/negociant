import { prisma } from "@/prisma/prisma-client"
import { ITelegramUser } from "@/shared/@types"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
	const users = await prisma.negoUser.findMany()
	return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
	const data: ITelegramUser = await req.json()
	const user = await prisma.negoUser.create({
		data: {
			id_tg: data.id,
			first_name: data.first_name,
			last_name: data.last_name,
			photo_url: data.photo_url,
			username: data.username,
		},
	})
	return NextResponse.json(user)
}
