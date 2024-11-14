import { cn } from "@/shared/lib/utils"
import React from "react"
import { Container } from "./Container"

interface HeaderProps {
	className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
	return (
		<div
			className={cn(
				"h-8 -mx-5 border-b-sky-900 border-b border-solid",
				className,
			)}>
			<Container className={cn("flex justify-between")}>
				<div>Добро пожаловать: </div>
				<div>Иван Полищук</div>
			</Container>
		</div>
	)
}
