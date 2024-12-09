import { cn } from "@/shared/lib/utils"
import React from "react"

interface EditWorksProps {
	className?: string
}

export default function EditWorks({
	className,
}: {
	className: React.FC<EditWorksProps>
}) {
	return <div className={cn("", className)}>Works</div>
}
