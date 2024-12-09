import { cn } from "@/shared/lib/utils"
import React from "react"

interface EditOrganizationProps {
	className?: string
}

export default function EditOrganization({
	className,
}: {
	className: React.FC<EditOrganizationProps>
}) {
	return <div className={cn("", className)}>EditOrganization</div>
}
