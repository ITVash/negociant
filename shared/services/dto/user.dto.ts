import { negoUser } from "@prisma/client"

export interface negoUserDTO extends negoUser {
	id_tg: number
	first_name: string
	last_name: string
	username: string
	photo_url: string
}
