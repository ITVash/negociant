"use client"
import { Container, Loading, LoadingContent } from "@/shared/components/shared"
import { Input } from "@/shared/components/ui/input"
import { useTelegram } from "@/shared/lib/providers"
import { cn } from "@/shared/lib/utils"
import { useOrganization } from "@/shared/store"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

const EditOrganization = ({ params: { id } }: { params: { id: string } }) => {
	const { webApp } = useTelegram()
	const router = useRouter()
	const { curentOrganization, fetchOrganization, loading } = useOrganization()
	React.useEffect(() => {
		fetchOrganization(Number(id))
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
	if (!webApp && !curentOrganization.contakts) return <Loading />
	return (
		<Container
			className={cn(`text-[${webApp?.themeParams.text_color}] flex-col mt-2`)}>
			{!loading ? (
				<>
					<h1>Редактирование организации</h1>
					<Link href='/organization'>Назад</Link>
					<label htmlFor='name'>Название организации</label>
					<Input
						placeholder='Название организации'
						id='name'
						value={curentOrganization.name}
					/>
					<label htmlFor='address'>Адрес</label>
					<Input
						placeholder='Название организации'
						id='address'
						value={curentOrganization.address}
					/>
					<label htmlFor=''>Контакты</label>
					{curentOrganization &&
						curentOrganization.contakts &&
						curentOrganization.contakts.map((contact, index) => (
							<div
								key={index}
								className='flex items-center justify-between mb-2'>
								<Input
									className='flex-1'
									id=''
									name='name'
									value={contact.name}
								/>
								<span className='px-2'>-</span>
								<Input
									className='w-[130px]'
									name='phone'
									value={contact.phone}
								/>
							</div>
						))}
				</>
			) : (
				<LoadingContent />
			)}
		</Container>
	)
}

export default EditOrganization
