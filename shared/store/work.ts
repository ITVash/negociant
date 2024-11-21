import { negoWork } from "@prisma/client"
import { Api } from "../services/api-client"
import { create } from "zustand"

export interface WorkState {
	loading: boolean
	error: boolean
	works: negoWork[]
	fetchWork: (id: number) => Promise<void>
	fetchWorksAll: () => Promise<void>
	fetchAddWork: (value: negoWork) => Promise<void>
	fetchEditWork: (id: number, value: negoWork) => Promise<void>
	fetchDelitWork: (id: number) => Promise<void>
}
export const useWork = create<WorkState>((set, get) => ({
	loading: true,
	error: false,
	works: [],
	/**
	 * Fetches a work item by its ID
	 * @param {number} id - work item ID
	 * @returns {Promise<void>} - resolves when the work item is fetched
	 * - 400 if the ID is not provided
	 * - 404 if the work item is not found
	 * - 500 if there is a server error
	 */
	fetchWork: async (id: number) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.work.getOne(id)
			set({ works: [data] })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	/**
	 * Fetches all work items
	 * @returns {Promise<void>} - resolves when all work items are fetched
	 * - 500 if there is a server error
	 */
	fetchWorksAll: async () => {
		try {
			set({ loading: true, error: false })
			const data = await Api.work.getAll()
			set({ works: data })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	/**
	 * Creates a new work item
	 * @param {negoWork} value - work item to be created
	 * @returns {Promise<void>} - resolves when the work item is created
	 * - 400 if the work item is not valid
	 * - 500 if there is a server error
	 */
	fetchAddWork: async (value: negoWork) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.work.addWork(value)
			set((state) => ({
				loading: true,
				error: false,
				works: [...state.works, data],
			}))
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	/**
	 * Edits a work item by its ID.
	 * @param {number} id - The ID of the work item to be edited.
	 * @param {negoWork} value - The work item data to be updated.
	 * @returns {Promise<void>} - resolves when the work item is edited
	 * - 400 if the ID is not provided or the work item is not valid
	 * - 404 if the work item is not found
	 * - 500 if there is a server error
	 */
	fetchEditWork: async (id: number, value: negoWork) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.work.editWork(id, value)
			set({ works: [data] })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	fetchDelitWork: async (id: number) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.work.getOne(id)
			set({ works: [data] })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
}))
