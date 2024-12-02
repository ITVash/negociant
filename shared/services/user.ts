import { negoUser } from "@prisma/client"
import { negoUserDTO } from "./dto/user.dto"
import { axiosInstance } from "./instance"

export const getMe = async (id: number): Promise<negoUser> => {
	return (await axiosInstance.get<negoUser>("/users/" + id)).data
}
export const getAll = async (): Promise<negoUser[]> => {
	return (await axiosInstance.get<negoUser[]>("/users")).data
}
export const addUser = async (values: negoUserDTO): Promise<negoUserDTO> => {
	return (await axiosInstance.post<negoUserDTO>("/users", values)).data
}
export const editUser = async (
	id: number,
	values: negoUser,
): Promise<negoUser> => {
	return (await axiosInstance.patch<negoUser>("/users/" + id, values)).data
}

export const delitUser = async (id: number): Promise<negoUser> => {
	return (await axiosInstance.delete<negoUser>("/users/" + id)).data
}

export function getOne(id_tg: number) {
	throw new Error("Function not implemented.")
}
