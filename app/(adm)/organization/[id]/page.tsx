"use client"
import { Container, Loading } from "@/shared/components/shared"
import { Input } from "@/shared/components/ui/input"
import { useTelegram } from "@/shared/lib/providers"
import { cn } from "@/shared/lib/utils"
import { useOrganization } from "@/shared/store"
import Link from "next/link"
import React from "react"

interface EditProps {
	className?: string
	params: { id: string }
}

const EditOrganization = ({
	className,
	params: { id },
}: {
	className?: string
	params: { id: string }
}) => {
	const { webApp } = useTelegram()
	const { curentOrganization, fetchOrganization } = useOrganization()
	React.useEffect(() => {
		fetchOrganization(Number(id))
	}, [])
	if (!webApp && !curentOrganization.contakts) return <Loading />
	return (
		<Container
			className={cn(
				`text-[${webApp?.themeParams.text_color}] flex-col mt-2`,
				className,
			)}>
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
					<div className='flex items-center justify-between mb-2'>
						<Input
							key={index}
							className='flex-1'
							id=''
							name='name'
							value={contact.name}
						/>
						<span className='px-2'>-</span>
						<Input
							key={index + contact.phone}
							className='w-[130px]'
							name='phone'
							value={contact.phone}
						/>
					</div>
				))}
		</Container>
	)
}

export default EditOrganization
