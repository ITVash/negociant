import { negoOrganization } from "@prisma/client"
import { axiosInstance } from "./instance"

export const getAll = async (): Promise<negoOrganization[]> => {
	return (await axiosInstance.get<negoOrganization[]>("/organization")).data
}
export const getOrganization = async (
	id: number,
): Promise<negoOrganization> => {
	return (await axiosInstance.get<negoOrganization>("/organization/" + id)).data
}
export const addOrganization = async (
	value: negoOrganization,
): Promise<negoOrganization> => {
	return (await axiosInstance.post<negoOrganization>("/organization", value))
		.data
}
export const EditOrganization = async (
	id: number,
	value: negoOrganization,
): Promise<negoOrganization> => {
	return (
		await axiosInstance.patch<negoOrganization>(`/organization/${id}`, value)
	).data
}
export const deleteOrganization = async (
	id: number,
): Promise<negoOrganization> => {
	return (await axiosInstance.delete<negoOrganization>("/organization/" + id))
		.data
}
