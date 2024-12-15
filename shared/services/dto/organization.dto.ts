import { negoContakts, negoOrganization } from "@prisma/client"

export interface OrganizationDTO extends negoOrganization {
	contakts?: negoContakts[]
}
