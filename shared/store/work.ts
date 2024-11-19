import { negoWork } from "@prisma/client"
import { create } from "zustand"

export interface WorkState {
	loading: boolean
	error: boolean
	works: negoWork[]
	fetchWork: (id: number) => Promise<void>
	fetchWorksAll: () => Promise<void>
	fetchEditWork: (id: number) => Promise<void>
	fetchDelitWork: (id: number) => Promise<void>
}
export const useWork = create<WorkState>((set, get) => ({
	loading: true,
	error: false,
	works: [],
	fetchWork: async () => {},
	fetchWorksAll: async () => {},
	fetchEditWork: async () => {},
	fetchDelitWork: async () => {},
}))
