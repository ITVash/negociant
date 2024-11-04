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
		<Container
			className={`text-[#ffffff] text-[${webApp.themeParams.text_color}] flex-col`}>
			<ul
				className={cn(
					"flex h-8 gap-1 bg-[#212121]",
					`bg-[${webApp.themeParams.header_bg_color}]`,
				)}>
				<li>Добро пожаловать:</li>
				{user?.photo_url && (
					<li>
						<img src={user?.photo_url} alt={user?.username} />
					</li>
				)}
				<li>
					{user?.first_name} {user?.last_name}
				</li>
			</ul>
		</Container>
	)
}
