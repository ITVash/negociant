import { cn } from "@/shared/lib/utils"
import React from "react"

interface AdminProps {
	className?: string
}

export default function Admin({
	className,
}: {
	className: React.FC<AdminProps>
}) {
	return <div className={cn("", className)}>Admin</div>
}
