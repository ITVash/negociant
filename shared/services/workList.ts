import { negoWorkList } from "@prisma/client"
import { axiosInstance } from "./instance"

/**
 * Retrieves all work lists.
 * @returns {Promise<negoWorkList[]>} - All work lists if found, otherwise an error message.
 * - 404 if work lists are not found.
 * - 500 if there is a server error.
 */

export const getAll = async (): Promise<negoWorkList[]> => {
	return (await axiosInstance.get<negoWorkList[]>("/workList")).data
}

/**
 * Retrieves a work list by its ID.
 * @param {number} id - The ID of the work list.
 * @returns {Promise<negoWorkList>} - The work list if found, otherwise an error message.
 * - 404 if the work list is not found.
 * - 500 if there is a server error.
 */
export const getOne = async (id: number): Promise<negoWorkList> => {
	return (await axiosInstance.get<negoWorkList>(`/workList/${id}`)).data
}

/**
 * Deletes a work list by its ID.
 * @param {number} id - The ID of the work list to be deleted.
 * @returns {Promise<negoWorkList>} - The deleted work list.
 * - 400 if the ID is not provided.
 * - 404 if the work list is not found.
 * - 500 if there is a server error.
 */
export const delitWorkList = async (id: number): Promise<negoWorkList> => {
	return (await axiosInstance.delete<negoWorkList>(`/workList/${id}`)).data
}

/**
 * Creates a new work list.
 * @param {negoWorkList} values - The work list data to be created.
 * @returns {Promise<negoWorkList>} - The created work list.
 * - 400 if the work list data is not valid.
 * - 500 if there is a server error.
 */
export const addWorkList = async (
	values: negoWorkList,
): Promise<negoWorkList> => {
	return (await axiosInstance.post<negoWorkList>("/workList", values)).data
}

/**
 * Updates a work list by its ID.
 * @param {number} id - The ID of the work list to be updated.
 * @param {negoWorkList} values - The work list data to be updated.
 * @returns {Promise<negoWorkList>} - The updated work list.
 * - 400 if the ID is not provided.
 * - 404 if the work list is not found.
 * - 500 if there is a server error.
 */
export const editWorkList = async (
	id: number,
	values: negoWorkList,
): Promise<negoWorkList> => {
	return (await axiosInstance.patch<negoWorkList>(`/workList/${id}`, values))
		.data
}
