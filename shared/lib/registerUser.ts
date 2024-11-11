import { prisma } from "@/prisma/prisma-client"
import { ITelegramUser } from "../@types"

export const CreateUser = async (user: ITelegramUser, setAuth: any) => {
	if (user) {
		const manyUser = await prisma.negoUser.findFirst({
			where: { id_tg: Number(user.id) },
		})

		if (!manyUser) {
			const data = await prisma.negoUser.create({
				data: {
					id_tg: user.id,
					last_name: user.last_name,
					first_name: user.first_name,
					photo_url: user.photo_url!,
					username: user.username,
					role: "GUEST",
				},
			})
			return data
		} else {
			setAuth(manyUser)
		}
	}
}
