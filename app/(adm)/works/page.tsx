import { cn } from "@/shared/lib/utils"
import React from "react"

interface EditWorksProps {
	className?: string
}

export const EditWorks: React.FC<EditWorksProps> = ({ className }) => {
	return <div className={cn("", className)}>Works</div>
}
