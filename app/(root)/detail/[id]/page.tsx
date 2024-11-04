"use client"
import { Container } from "@/shared/components/shared"
import { useTelegram } from "@/shared/lib/providers"
import { cn } from "@/shared/lib/utils"

export default function Detail({ params: { id } }: { params: { id: string } }) {
	const { webApp } = useTelegram()
	if (!webApp) {
		return <p>Загрузка...</p>
	}
	return (
		<Container className={cn(`text-[${webApp.themeParams.text_color}]`)}>
			<div className={cn("")}>Detail {id}</div>
		</Container>
	)
}
