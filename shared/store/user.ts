import { negoUser, negoUserRole } from "@prisma/client"
import { create } from "zustand"
import { Api } from "../services/api-client"

export interface UserState {
	loading: boolean
	error: boolean
	items: negoUser[]
	getMe?: negoUser

	fetchUser: (id_tg: number) => Promise<void>
	fetchUsersAll: () => Promise<void>
	fetchEditUser: (id: number, values: negoUserRole) => Promise<void>
	fetchDelitUser: (id: number) => Promise<void>
}
export const useUser = create<UserState>((set, get) => ({
	loading: true,
	error: false,
	items: [],
	getMe: {} as negoUser,
	/**
	 * Fetches a user by its ID
	 * @param {number} id - user ID
	 * @returns {Promise<void>} - resolves when the user is fetched
	 * - 400 if the ID is not provided
	 * - 404 if the user is not found
	 * - 500 if there is a server error
	 */
	fetchUser: async (id: number) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.user.getMe(id)
			set({ getMe: data })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},

	/**
	 * Fetches all users.
	 * @returns {Promise<void>} - resolves when all users are fetched
	 * - 404 if users are not found.
	 * - 500 if there is a server error.
	 */
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
	/**
	 * Updates a user by its ID.
	 * @param {number} id - user ID
	 * @param {negoUserRole} values - user role to be updated
	 * @returns {Promise<void>} - resolves when the user is updated
	 * - 400 if the ID is not provided or the user role is not valid
	 * - 404 if the user is not found
	 * - 500 if there is a server error
	 */
	fetchEditUser: async (id: number, values: negoUserRole) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.user.editUser(id, values)
			set((state) => ({
				loading: true,
				error: false,
				items: state.items.map((itm) => {
					if (itm.id === id) {
						itm.role = data.role
					}
					return itm
				}),
			}))
			get()
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	/**
	 * Deletes a user by its ID.
	 * @param {number} id - user ID
	 * @returns {Promise<void>} - resolves when the user is deleted
	 * - 400 if the ID is not provided
	 * - 404 if the user is not found
	 * - 500 if there is a server error
	 */
	fetchDelitUser: async (id: number) => {
		try {
			set({ loading: true, error: false })
			await Api.user.delitUser(id)
			set((state) => ({
				loading: true,
				error: false,
				items: state.items.filter((itm) => itm.id !== id),
			}))
			get()
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
}))
