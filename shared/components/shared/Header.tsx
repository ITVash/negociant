import { cn } from "@/shared/lib/utils"
import React from "react"
import { Container } from "./Container"
import { ITelegramUser } from "@/shared/@types"
import { CreateUser } from "@/shared/lib/registerUser"
import { useUser } from "@/shared/store"
import { stat } from "fs"

interface HeaderProps {
	className?: string
	user: ITelegramUser
}

export const Header: React.FC<HeaderProps> = ({ className, user }) => {
	CreateUser(user)
	//const { items } = useUser()
	return (
		<div
			className={cn(
				"h-8 -mx-5 border-b-sky-900 border-b border-solid mt-2",
				className,
			)}>
			<Container className={cn("flex justify-between")}>
				<div>Добро пожаловать: </div>
				<div>
					{user.first_name} {user.last_name}
				</div>
			</Container>
		</div>
	)
}
