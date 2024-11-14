import { negoUser, negoUserRole } from "@prisma/client"

export interface negoUserDTO extends negoUser {
	id: number
	id_tg: number
	first_name: string
	last_name: string
	username: string
	photo_url: string
	role: negoUserRole
}
