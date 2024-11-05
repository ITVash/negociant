import { negoUserDTO } from "./dto/user.dto"
import { axiosInstance } from "./instance"

export const getMe = async ({ id }: { id: number }): Promise<negoUserDTO> => {
	return (await axiosInstance.get<negoUserDTO>("/user/" + id)).data
}
export const getAll = async (): Promise<negoUserDTO> => {
	return (await axiosInstance.get<negoUserDTO>("/user")).data
}
export const addUser = async (values: negoUserDTO): Promise<negoUserDTO> => {
	return (await axiosInstance.post<negoUserDTO>("/user", values)).data
}
export const editUser = async (
	id: number,
	values: negoUserDTO,
): Promise<negoUserDTO> => {
	return (await axiosInstance.patch<negoUserDTO>("/user/" + id, values)).data
}

export const delitUser = async (id: number): Promise<negoUserDTO> => {
	return (await axiosInstance.delete<negoUserDTO>("/user/" + id)).data
}
