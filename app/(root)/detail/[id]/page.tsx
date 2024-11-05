"use client"
import { Container } from "@/shared/components/shared"
import { Button } from "@/shared/components/ui/button"
import { useTelegram } from "@/shared/lib/providers"
import { cn } from "@/shared/lib/utils"

export default function Detail({ params: { id } }: { params: { id: string } }) {
	const { webApp } = useTelegram()
	if (!webApp) {
		return <p>Загрузка...</p>
	}
	return (
		<Container className={cn(`text-[${webApp.themeParams.text_color}]`)}>
			<div className={cn("mt-4")}>
				<ul>
					<li>
						<b>Клиент:</b> {id} ГМСК
					</li>
					<li>
						<b>Адрес доставки:</b> г. Донецк, ул. Марии Ульяновой, д. 64а, кв. 9
					</li>
					<li>
						<b>Цели поездки:</b> Доставка канцелярии, химии, хоз-инвентарь,
						документы!
					</li>
					<li>
						<b>Комментарий:</b> Отдать товар, за документами заедим позже!
					</li>
					<li>
						<b>Контактное лицо:</b> Катерина
					</li>
					<li>
						<b>Телефон:</b> <a href='tel:+79493156867'>+79493156867</a>
					</li>
				</ul>
				<Button className='m-auto'>Показать на карте</Button>
			</div>
		</Container>
	)
}
