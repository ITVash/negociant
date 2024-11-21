import { prisma } from "@/prisma/prisma-client"
import { negoWork } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

/**
 * Gets all works
 * @returns {Promise<NextResponse>} Response with all works
 */
export async function GET() {
	const works = await prisma.negoWork.findMany({
		include: {
			workList: true,
		},
	})
	return NextResponse.json(works, { status: 200 })
}

/**
 * Creates a new work item
 * @param {NextRequest} req - The request object containing the work data
 * @returns {Promise<NextResponse>} Response with the created work item
 */
export async function POST(req: NextRequest) {
	const data: negoWork = await req.json()
	const work = await prisma.negoWork.create({ data })
	return NextResponse.json(work, { status: 200 })
}
