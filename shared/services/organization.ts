import { negoOrganization } from "@prisma/client"
import { axiosInstance } from "./instance"
import { OrganizationDTO } from "./dto/organization.dto"

export const getAll = async (): Promise<negoOrganization[]> => {
	return (await axiosInstance.get<negoOrganization[]>("/organization")).data
}
export const getOrganization = async (id: number): Promise<OrganizationDTO> => {
	return (await axiosInstance.get<OrganizationDTO>("/organization/" + id)).data
}
export const addOrganization = async (
	value: OrganizationDTO,
): Promise<OrganizationDTO> => {
	return (await axiosInstance.post<OrganizationDTO>("/organization", value))
		.data
}
export const EditOrganization = async (
	id: number,
	value: OrganizationDTO,
): Promise<OrganizationDTO> => {
	return (
		await axiosInstance.patch<OrganizationDTO>(`/organization/${id}`, value)
	).data
}
export const deleteOrganization = async (
	id: number,
): Promise<OrganizationDTO> => {
	return (await axiosInstance.delete<OrganizationDTO>("/organization/" + id))
		.data
}
