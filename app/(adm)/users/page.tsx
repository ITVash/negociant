"use client"
import { Container, Loading } from "@/shared/components/shared"
import { useTelegram } from "@/shared/lib/providers"
import { cn } from "@/shared/lib/utils"
import { useUser } from "@/shared/store"
import { useRouter } from "next/navigation"
import React from "react"

export default function EditUsers() {
	const { webApp } = useTelegram()
	const router = useRouter()
	const { items } = useUser()
	let selectColor = "#FFF"

	React.useEffect(() => {
		if (webApp) {
			console.log(webApp)
			selectColor = webApp.themeParams.bg_color
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
			<h3
				className={`text-3xl font-bold mb-2 text-[${webApp?.themeParams.text_color}]`}>
				Список пользователей!
			</h3>
			<ul>
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
								name='changeRole'
								id='changeRole'
								className={`bg-[${selectColor}] text-[${
									webApp!.themeParams.text_color
								}]`}
								defaultValue={item.role}>
								<option value='ADMIN'>ADMIN</option>
								<option value='USER'>USER</option>
								<option value='GUEST'>GUEST</option>
							</select>
						</div>
					</li>
				))}
			</ul>
		</Container>
	)
}
