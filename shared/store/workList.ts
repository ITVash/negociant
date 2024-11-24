import { negoWorkList } from "@prisma/client"
import { create } from "zustand"
import { Api } from "../services/api-client"

export interface IWorkListState {
	loading: boolean
	error: boolean
	workList: negoWorkList[]
	fetchWorkList: (id: number) => Promise<void>
	fetchWorkListsAll: () => Promise<void>
	fetchAddWorkList: (value: negoWorkList) => Promise<void>
	fetchEditWorkList: (id: number, value: negoWorkList) => Promise<void>
	fetchDelitWorkList: (id: number) => Promise<void>
}

export const useWorkList = create<IWorkListState>((set, get) => ({
	loading: true,
	error: false,
	workList: [],
	/**
	 * Fetches a work list by its ID.
	 * @param {number} id - The ID of the work list.
	 * @returns {Promise<void>} - Resolves when the work list is fetched.
	 * - 400 if the ID is not provided.
	 * - 404 if the work list is not found.
	 * - 500 if there is a server error.
	 */
	fetchWorkList: async (id: number) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.workList.getOne(id)
			set({ workList: [data] })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	/**
	 * Fetches all work lists.
	 * @returns {Promise<void>} - Resolves when all work lists are fetched.
	 * - 404 if work lists are not found.
	 * - 500 if there is a server error.
	 */
	fetchWorkListsAll: async () => {
		try {
			set({ loading: true, error: false })
			const data = await Api.workList.getAll()
			set({ workList: data })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	/**
	 * Creates a new work list.
	 * @param {negoWorkList} value - The work list data to be created.
	 * @returns {Promise<void>} - resolves when the work list is created
	 * - 400 if the work list is not valid.
	 * - 404 if the work list is not found.
	 * - 500 if there is a server error.
	 */
	fetchAddWorkList: async (value: negoWorkList) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.workList.addWorkList(value)
			set({ workList: [...get().workList, data] })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	/**
	 * Updates a work list by its ID.
	 * @param {number} id - The ID of the work list to be updated.
	 * @param {negoWorkList} values - The work list data to be updated.
	 * @returns {Promise<negoWorkList>} - The updated work list.
	 * - 400 if the ID is not provided.
	 * - 404 if the work list is not found.
	 * - 500 if there is a server error.
	 */
	fetchEditWorkList: async (id: number, value: negoWorkList) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.workList.editWorkList(id, value)
			set({ workList: [data] })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	/**
	 * Deletes a work list by its ID.
	 * @param {number} id - The ID of the work list to be deleted.
	 * @returns {Promise<negoWorkList>} - The deleted work list.
	 * - 400 if the ID is not provided.
	 * - 404 if the work list is not found.
	 * - 500 if there is a server error.
	 */
	fetchDelitWorkList: async (id: number) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.workList.delitWorkList(id)
			set({ workList: [data] })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
			try {
				set({ loading: true, error: false })
				const data = await Api.workList.delitWorkList(id)
				set({ workList: [data] })
			} catch (error) {
				console.error(error)
				set({ error: true })
			} finally {
				set({ loading: false })
			}
		}
	},
}))
