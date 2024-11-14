"use client"
import { prisma } from "@/prisma/prisma-client"
import { Container, Header, WorkList } from "@/shared/components/shared"
import { Button } from "@/shared/components/ui/button"
import { Checkbox } from "@/shared/components/ui/checkbox"
import { useTelegram } from "@/shared/lib/providers"
import { CreateUser } from "@/shared/lib/registerUser"
import { cn } from "@/shared/lib/utils"
import { negoUser } from "@prisma/client"
import { ArrowBigRightDash } from "lucide-react"
import Link from "next/link"
import React from "react"

interface ITodo {
	data: Date
}
export default function Home() {
	const { user, webApp } = useTelegram()
	const [auth, setAuth] = React.useState<negoUser>()

	React.useEffect(() => {
		if (webApp && user) {
			webApp!.BackButton.isVisible = false
			CreateUser(user, setAuth)
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
			className={`text-[#ffffff] text-[${webApp.themeParams.text_color}] flex-col max-h-screen`}>
			<Header />
			<WorkList items={temple} />
			<ul
				className={cn(
					"flex h-8 gap-1 bg-[#212121] border-b-sky-900 border-b border-solid",
					`bg-[${webApp.themeParams.header_bg_color}]`,
				)}>
				{auth ? (
					<>
						<li>Добро пожаловать:</li>
						<li>
							{auth.first_name} {auth.last_name}
						</li>
					</>
				) : (
					<li>
						<Button
							variant={"link"}
							onClick={() => CreateUser(user!, setAuth)}
							className={cn(
								`bg-[${webApp.themeParams.button_color}] text-[${webApp.themeParams.button_text_color}]`,
							)}>
							Регистрация...
						</Button>
					</li>
				)}
			</ul>
		</Container>
	)
}
