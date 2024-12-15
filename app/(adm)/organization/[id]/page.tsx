"use client"
import { Container, Loading } from "@/shared/components/shared"
import { Input } from "@/shared/components/ui/input"
import { OrganizationContakts } from "@/shared/lib/contakts"
import { useTelegram } from "@/shared/lib/providers"
import { cn } from "@/shared/lib/utils"
import { useOrganization } from "@/shared/store"
import { negoContakts } from "@prisma/client"
import Link from "next/link"
import React from "react"

interface EditProps {
	className?: string
	params: { id: string }
}

const EditOrganization: React.FC<EditProps> = ({ className, params }) => {
	const { webApp } = useTelegram()
	const { curentOrganization, fetchOrganization } = useOrganization()
	React.useEffect(() => {
		fetchOrganization(Number(params.id))
	}, [])
	if (!webApp && !curentOrganization) return <Loading />
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
			{curentOrganization.contakts &&
				curentOrganization.contakts.map((contact, index) => (
					<Input key={index} id='' value={contact.name} />
				))}
		</Container>
	)
}

export default EditOrganization
