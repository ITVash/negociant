"use  client"
import { cn } from "@/shared/lib/utils"
import React from "react"
import { Container } from "./Container"
import { ITelegramUser } from "@/shared/@types"
import { CreateUser } from "@/shared/lib/registerUser"
import Image from "next/image"
import { DrawerMenu } from "."
import { Button } from "../ui/button"
interface HeaderProps {
	className?: string
	user: ITelegramUser
}

export const Header: React.FC<HeaderProps> = ({ className, user }) => {
	console.log(user)
	//CreateUser(user)
	//const { items } = useUser()
	//const dataUser = items.filter((item) => item.id_tg === user.id)[0]
	return (
		<div
			className={cn(
				"h-8 -mx-5 border-b-sky-900 border-b border-solid mt-2",
				className,
			)}>
			<Container className={cn("flex justify-between items-center")}>
				<DrawerMenu>
					<Button variant='link'>Добро пожаловать:</Button>{" "}
				</DrawerMenu>
				<div>
					{user && user.photo_url && (
						<div className='flex justify-between items-center'>
							<Image
								src={user.photo_url!}
								alt={user.username}
								width={25}
								height={25}
								className='rounded-xl mr-2'
							/>{" "}
							{user.first_name}
						</div>
					)}
				</div>
			</Container>
		</div>
	)
}
