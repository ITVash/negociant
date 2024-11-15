"use client"
import { cn } from "@/shared/lib/utils"
import React from "react"
import { Container } from "./Container"
import { ITelegramUser } from "@/shared/@types"
import { CreateUser } from "@/shared/lib/registerUser"
import { useUser } from "@/shared/store"
import Image from "next/image"
interface HeaderProps {
	className?: string
	user: ITelegramUser
}

export const Header: React.FC<HeaderProps> = ({ className, user }) => {
	CreateUser(user)
	const { items } = useUser()
	const dataUser = items.filter((item) => item.id_tg === user.id)[0]
	//fetchUsersAll()
	//console.log(items)
	return (
		<div
			className={cn(
				"h-8 -mx-5 border-b-sky-900 border-b border-solid mt-2",
				className,
			)}>
			<Container className={cn("flex justify-between")}>
				<div>Добро пожаловать: </div>
				<div>
					<Image src={dataUser.photo_url!} alt={dataUser.username} />{" "}
					{dataUser.first_name} {dataUser.last_name}
				</div>
			</Container>
		</div>
	)
}
