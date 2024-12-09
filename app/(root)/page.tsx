"use client"
import React from "react"
import {
	Container,
	Header,
	Loading,
	NotAccess,
	WorkList,
} from "@/shared/components/shared"
import { useTelegram } from "@/shared/lib/providers"
import { CreateUser } from "@/shared/lib/registerUser"
import { useUser } from "@/shared/store"
import { negoUser } from "@prisma/client"

interface ITodo {
	data: Date
}
export default function Home() {
	const { user, webApp } = useTelegram()
	const { items, fetchUsersAll, getMe, fetchUser } = useUser()
	React.useEffect(() => {
		fetchUsersAll()
	}, [])

	React.useEffect(() => {
		if (user) {
			const userCreate = items.filter((item) => item.id_tg === user?.id)[0]
			if (!userCreate) {
				CreateUser(user)
			}
			fetchUser(user.id)
		}
	}, [user])

	const dataUser =
		user && items.length > 0
			? items.filter((item) => item.id_tg === user?.id)[0]
			: (user as negoUser)
	/* const dataUser =
		items &&
		items.length > 0 &&
		items.filter((item) => item.id_tg === 454135208)[0] */

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
	if (!webApp || !items || !getMe!.role) {
		return <Loading />
	}
	return (
		<Container
			className={`text-[#ffffff] text-[${webApp?.themeParams.text_color}] flex-col max-h-screen`}>
			{(getMe && getMe.role === "ADMIN") || (getMe && getMe.role === "USER") ? (
				<>
					<Header user={getMe!} />
					<WorkList items={temple} />
				</>
			) : (
				<NotAccess />
			)}
		</Container>
	)
}
