import { negoUser } from "@prisma/client"
import { negoUserDTO } from "./dto/user.dto"
import { axiosInstance } from "./instance"

export const getMe = async ({ id }: { id: number }): Promise<negoUserDTO> => {
	return (await axiosInstance.get<negoUserDTO>("/users/" + id)).data
}
export const getAll = async (): Promise<negoUser[]> => {
	return (await axiosInstance.get<negoUser[]>("/users")).data
}
export const addUser = async (values: negoUserDTO): Promise<negoUserDTO> => {
	return (await axiosInstance.post<negoUserDTO>("/users", values)).data
}
export const editUser = async (
	id: number,
	values: negoUserDTO,
): Promise<negoUserDTO> => {
	return (await axiosInstance.patch<negoUserDTO>("/users/" + id, values)).data
}

export const delitUser = async (id: number): Promise<negoUserDTO> => {
	return (await axiosInstance.delete<negoUserDTO>("/users/" + id)).data
}
