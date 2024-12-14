import { negoOrganization } from "@prisma/client"
import { create } from "zustand"
import { Api } from "../services/api-client"

export interface OrganizationState {
	loading: boolean
	error: boolean
	curentOrganization: negoOrganization
	organization: negoOrganization[]

	fetchOrganizationAll: () => Promise<void>
	fetchOrganization: (id: number) => Promise<void>
	fetchAddOrganization: (value: negoOrganization) => Promise<void>
	fetchEditOrganization: (id: number, value: negoOrganization) => Promise<void>
	fetchDeleteOrganization: (id: number) => Promise<void>
}

export const useOrganization = create<OrganizationState>((set) => ({
	loading: true,
	error: false,
	curentOrganization: {} as negoOrganization,
	organization: [],

	fetchOrganizationAll: async () => {
		try {
			set({ loading: true, error: false })
			const data = await Api.organization.getAll()
			set({ organization: data })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	fetchOrganization: async (id: number) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.organization.getOrganization(id)
			set({ curentOrganization: data })
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	fetchAddOrganization: async (value: negoOrganization) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.organization.addOrganization(value)
			set((state) => ({
				organization: [data, ...state.organization],
			}))
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	fetchEditOrganization: async (id: number, value: negoOrganization) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.organization.EditOrganization(id, value)
			set((state) => ({
				organization: state.organization.map((itm) => {
					if (itm.id === id) {
						itm = data
					}
					return itm
				}),
			}))
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	fetchDeleteOrganization: async (id: number) => {
		try {
			set({ loading: true, error: false })
			await Api.organization.deleteOrganization(id)
			set((state) => ({
				organization: state.organization.filter((itm) => itm.id !== id),
			}))
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
}))
