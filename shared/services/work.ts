import { negoWork } from "@prisma/client"
import { axiosInstance } from "./instance"

/**
 * Retrieves all work items.
 * @returns {Promise<negoWork[]>} - All work items if found, otherwise an error message.
 * - 500 if there is a server error.
 */
export const getAll = async (): Promise<negoWork[]> => {
	return (await axiosInstance.get<negoWork[]>("/works")).data
}
/**
 * Retrieves a work item by its ID.
 * @param {number} id - The ID of the work item.
 * @returns {Promise<negoWork>} - The work item if found, otherwise an error message.
 * - 400 if the ID is not provided.
 * - 404 if the work item is not found.
 * - 500 if there is a server error.
 */
export const getOne = async (id: number): Promise<negoWork> => {
	return (await axiosInstance.get<negoWork>("/works/" + id)).data
}
/**
 * Adds a new work item.
 * @param {negoWork} values - The work item data to be added.
 * @returns {Promise<negoWork>} - The added work item.
 * - 500 if there is a server error.
 */
export const addWork = async (values: negoWork): Promise<negoWork> => {
	return (await axiosInstance.post<negoWork>("/works", values)).data
}
/**
 * Updates a work item by its ID.
 * @param {number} id - The ID of the work item to be updated.
 * @param {negoWork} values - The work item data to be updated.
 * @returns {Promise<negoWork>} - The updated work item.
 * - 400 if the ID is not provided.
 * - 404 if the work item is not found.
 * - 500 if there is a server error.
 */
export const editWork = async (
	id: number,
	values: negoWork,
): Promise<negoWork> => {
	return (await axiosInstance.patch<negoWork>("/works/" + id, values)).data
}
/**
 * Deletes a work item by its ID.
 * @param {number} id - The ID of the work item to be deleted.
 * @returns {Promise<negoWork>} - The deleted work item.
 * - 400 if the ID is not provided.
 * - 500 if there is a server error.
 */
export const delitWork = async (id: number): Promise<negoWork> => {
	return (await axiosInstance.delete<negoWork>("/works/" + id)).data
}
export function create(value: {
	id: number
	workDate: Date
	createdAt: Date
	updatedAt: Date
}) {
	throw new Error("Function not implemented.")
}
