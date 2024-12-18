import { cn } from "@/shared/lib/utils"
import React from "react"

interface ContainerProps {
	className?: string
}

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
	className,
	children,
}) => {
	return (
		<div className={cn("max-w-sm px-5 flex m-auto", className)}>{children}</div>
	)
}
