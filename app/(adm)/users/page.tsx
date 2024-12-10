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
	if (!webApp || !items) {
		return <Loading />
	}
	return (
		<Container className={cn(`text-[${webApp?.themeParams.text_color}], mt-4`)}>
			<h3>Список пользователей!</h3>
			<ul>
				<li>
					<div className='w-[100px]'>Имя</div>
					<div className='w-[150px]'>Фамилия</div>
					<div className='w-[80px]'>Роль</div>
				</li>
				{items.map((item, id) => (
					<li key={id} className='flex gap-2'>
						<div className='w-[100px]'>{item.first_name}</div>
						<div className='w-[150px]'>{item.last_name}</div>
						<div className='w-[80px]'>{item.role}</div>
					</li>
				))}
			</ul>
		</Container>
	)
}
