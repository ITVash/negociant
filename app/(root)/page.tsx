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
	}, [colors])
	if (!webApp) {
		return <p>Загрузка...</p>
	}
	return (
		<Container className={`text-[${webApp.themeParams.text_color}] flex-col`}>
			<div>
				{user ? (
					<>
						<h1>
							Добро пожаловать: {user!.first_name} {user!.last_name}
						</h1>
					</>
				) : (
					<p>Приложение необходимо открывать, только в телеграмме </p>
				)}
			</div>
			<div>
				{webApp ? (
					<>
						<h1>Ваши настройки:</h1>
						<pre>{JSON.stringify(webApp, null, 2)}</pre>
					</>
				) : (
					<p>Приложение необходимо открывать, только в телеграмме </p>
				)}
			</div>
		</Container>
	)
}
