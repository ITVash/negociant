"use client"
import { Container, Loading } from "@/shared/components/shared"
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/shared/components/ui/table"
import { useTelegram } from "@/shared/lib/providers"
import { cn } from "@/shared/lib/utils"
import { useUser } from "@/shared/store"
import { negoUserRole } from "@prisma/client"
import { useRouter } from "next/navigation"
import React from "react"

export default function EditUsers() {
	const { webApp } = useTelegram()
	const router = useRouter()
	const { items, fetchEditUser, fetchUsersAll } = useUser()
	const onChangeHandle = async (
		id: number,
		value: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const role = value.target.value
		if (role === "USER") await fetchEditUser(id, negoUserRole.USER)
		if (role === "ADMIN") await fetchEditUser(id, negoUserRole.ADMIN)
		if (role === "GUEST") await fetchEditUser(id, negoUserRole.GUEST)
	}
	React.useEffect(() => {
		fetchUsersAll()
	}, [])
	React.useEffect(() => {
		if (webApp) {
			webApp.BackButton.isVisible = true

			webApp.onEvent("backButtonClicked", router.back)
		}
		return () => {
			if (webApp) {
				webApp.BackButton.isVisible = false
				webApp.offEvent("backButtonClicked", router.back)
			}
		}
	}, [])
	if (!webApp && !items) {
		return <Loading />
	}
	return (
		<Container
			className={cn(
				`text-[${webApp?.themeParams.text_color}] mt-4 flex flex-col`,
			)}>
			<Table>
				<TableCaption>Список пользователей!</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Имя</TableHead>
						<TableHead>Фамилия</TableHead>
						<TableHead>Роль</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{items.map((item, id) => (
						<TableRow key={item.username + id}>
							<TableCell>{item.first_name}</TableCell>
							<TableCell>{item.last_name}</TableCell>
							<TableCell>
								<select
									onChange={(e) => onChangeHandle(item.id, e)}
									className={`bg-[transparent] hover:bg-transparent active:bg-blue-500 focus:bg-blue-500 text-[${
										webApp!.themeParams.text_color
									}]`}
									defaultValue={item.role}>
									<option key={item.id + "ADMIN"} value='ADMIN'>
										ADMIN
									</option>
									<option key={item.id + "USER"} value='USER'>
										USER
									</option>
									<option key={item.id + "GUEST"} value='GUEST'>
										GUEST
									</option>
								</select>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			{/* <ul>
				<li className='flex gap-2 border-b-2 border-solid border-blue-800'>
					<div className='w-[130px] text-center border-r-2 border-solid border-blue-800'>
						Имя
					</div>
					<div className='w-[120px] text-center border-r-2 border-solid border-blue-800'>
						Фамилия
					</div>
					<div className='flex-1 text-center'>Роль</div>
				</li>
				{items.map((item, id) => (
					<li
						key={id}
						className='flex gap-2 pt-1 my-[-0.25rem] border-b-2 border-solid border-blue-800'>
						<div className='w-[130px] text-left border-r-2 border-solid border-blue-800'>
							{item.first_name}
						</div>
						<div className='w-[120px] text-left border-r-2 border-solid border-blue-800'>
							{item.last_name}
						</div>
						<div className='flex-1  text-left'>
							<select
								onChange={(e) => onChangeHandle(item.id, e)}
								className={`bg-[transparent] hover:bg-transparent active:bg-blue-500 focus:bg-blue-500 text-[${
									webApp!.themeParams.text_color
								}]`}
								defaultValue={item.role}>
								<option key={item.id + "ADMIN"} value='ADMIN'>
									ADMIN
								</option>
								<option key={item.id + "USER"} value='USER'>
									USER
								</option>
								<option key={item.id + "GUEST"} value='GUEST'>
									GUEST
								</option>
							</select>
						</div>
					</li>
				))}
			</ul> */}
		</Container>
	)
}
