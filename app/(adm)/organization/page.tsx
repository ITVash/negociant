import { cn } from "@/shared/lib/utils"
import React from "react"

interface EditOrganizationProps {
	className?: string
}

export const EditOrganization: React.FC<EditOrganizationProps> = ({
	className,
}) => {
	return <div className={cn("", className)}>EditOrganization</div>
}
