import { cn } from "@/shared/lib/utils"
import React from "react"

interface EditUsersProps {
	className?: string
}

export default function EditUsers({
	className,
}: {
	className: React.FC<EditUsersProps>
}) {
	return <div className={cn("", className)}>EditUsers</div>
}
