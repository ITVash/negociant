import { cn } from "@/shared/lib/utils"
import React from "react"

interface EditUsersProps {
	className?: string
}

export const EditUsers: React.FC<EditUsersProps> = ({ className }) => {
	return <div className={cn("", className)}>EditUsers</div>
}
