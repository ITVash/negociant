import { negoUser } from "@prisma/client"
import { create } from "zustand"
import { Api } from "../services/api-client"

export interface UserState {
	loading: boolean
	error: boolean
	items: negoUser[]

	fetchUser: (id_tg: number) => Promise<void>
	fetchUsersAll: () => Promise<void>
	fetchEditUser: (id: number, values: negoUser) => Promise<void>
	fetchDelitUser: (id: number) => Promise<void>
}
export const useUser = create<UserState>((set, get) => ({
	loading: true,
	error: false,
	items: [],
	fetchUser: async (id: number) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.user.getMe(id)
			set({ items: [data] })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
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
	fetchEditUser: async (id: number, values: negoUser) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.user.editUser(id, values)
			set({ items: [data] })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	fetchDelitUser: async (id: number) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.user.delitUser(id)
			set({ items: [data] })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
}))
