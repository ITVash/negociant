import { prisma } from "@/prisma/prisma-client"
import { NextResponse } from "next/server"

export async function GET({ params }: { params: { tg_id: String } }) {
	const id = Number(params.tg_id)
	const user = await prisma.negoUser.findFirst({ where: { id } })
	if (!user) return false
	return NextResponse.json(user)
}
