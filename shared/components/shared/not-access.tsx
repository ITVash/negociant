import { cn } from "@/shared/lib/utils"
import React from "react"

interface INotAccessProps {
	className?: string
}

export const NotAccess: React.FC<INotAccessProps> = ({ className }) => {
	return (
		<div className={cn("flex items-center justify-center", className)}>
			<p>У вас нет доступа к приложению. Обратитесь к администратору!</p>
		</div>
	)
}
