import { prisma } from "@/prisma/prisma-client"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
	req: NextRequest,
	{ params }: { params: { tg_id: String } },
) {
	const id = Number(params.tg_id)
	const data = Number(req.ip)
	const user = await prisma.negoUser.findFirst({ where: { id_tg: id } })
	if (!user)
		return NextResponse.json({
			message: "Пользователь не был найден в базе данных!",
		})
	return NextResponse.json(user)
}
