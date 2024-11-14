import { negoUser } from "@prisma/client"
import { create } from "zustand"
import { Api } from "../services/api-client"

export interface UserState {
	loading: boolean
	error: boolean
	items: negoUser[]

	fetchUser: (id_tg: number) => Promise<void>
	fetchUsersAll: () => Promise<void>
	fetchEditUser: (id_tg: number) => Promise<void>
	fetchDelitUser: (id_tg: number) => Promise<void>
}
export const useUser = create<UserState>((set, get) => ({
	loading: true,
	error: false,
	items: [],
	fetchUser: async (id_tg: number) => {},
	fetchUsersAll: async () => {
		try {
			set({ loading: true, error: false })
			const data = await Api.user.getAll()
			set({ items: data })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	fetchEditUser: async (id_tg: number) => {},
	fetchDelitUser: async (id_tg: number) => {},
}))
