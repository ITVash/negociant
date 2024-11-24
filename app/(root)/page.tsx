"use client"
import { ITelegramUser } from "@/shared/@types"
import { Container, Header, WorkList } from "@/shared/components/shared"
import { useTelegram } from "@/shared/lib/providers"
import { useUser } from "@/shared/store"
import React from "react"

interface ITodo {
	data: Date
}
export default function Home() {
	const { user, webApp } = useTelegram()
	const { items, fetchUsersAll } = useUser()
	React.useEffect(() => {
		fetchUsersAll()
	}, [])
	const dataUser =
		items.length > 0
			? items.filter((item) => item.id_tg === user?.id)[0]
			: ({
					first_name: "Пользователь",
					last_name: "",
					username: "User",
			  } as ITelegramUser)

	React.useEffect(() => {
		if (webApp && user) {
			webApp!.BackButton.isVisible = false
		}
	}, [])
	const temple = [
		{ idw: 1, organization: "ГМСК" },
		{ idw: 2, organization: "Рынки Донбасса" },
		{ idw: 3, organization: "АУ Правительство" },
		{ idw: 4, organization: "Пионер" },
		{ idw: 5, organization: "Сидония" },
		{ idw: 6, organization: "Филипенко" },
		{ idw: 7, organization: "Нагорнюк" },
		{ idw: 8, organization: "Рынки Донбасса" },
		{ idw: 9, organization: "ГМСК" },
		{ idw: 10, organization: "АУ Правительство" },
		{ idw: 11, organization: "Пионер" },
		{ idw: 12, organization: "Сидония" },
		{ idw: 13, organization: "Филипенко" },
		{ idw: 14, organization: "ГМСНагорнюк" },
		{ idw: 15, organization: "Рынки Донбасса" },
		{ idw: 16, organization: "Пионер" },
		{ idw: 17, organization: "Нагорнюк" },
		{ idw: 18, organization: "Филипенко" },
		{ idw: 19, organization: "Сидония" },
	]
	if (!webApp) {
		return <p>Загрузка...</p>
	}
	return (
		<Container
			className={`text-[#ffffff] text-[${webApp?.themeParams.text_color}] flex-col max-h-screen`}>
			<React.Suspense>
				<Header user={dataUser!} />
			</React.Suspense>
			<WorkList items={temple} />
		</Container>
	)
}
