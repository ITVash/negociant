"use client"
import { IThemeParams } from "@/shared/@types"
import { Container } from "@/shared/components/shared"
import { useTelegram } from "@/shared/lib/providers"
import { cn } from "@/shared/lib/utils"
import React from "react"

export default function Home() {
	const { user, webApp } = useTelegram()
	const [colors, setColors] = React.useState<IThemeParams>()
	React.useEffect(() => {
		if (webApp) {
			setColors(webApp.themeParams)
		}
	}, [])
	return (
		<Container className={`text-[${colors?.text_color}]`}>
			{user ? (
				<>
					<h1>
						Добро пожаловать: {user!.first_name} {user!.last_name}
					</h1>
					<p>
						Ваша цветовая схема: <pre>{JSON.stringify(colors)}</pre>
					</p>
					User data:
					<pre>{JSON.stringify(user, null, 2)}</pre>
				</>
			) : (
				<p>Приложение необходимо открывать, только в телеграмме </p>
			)}
		</Container>
	)
}
