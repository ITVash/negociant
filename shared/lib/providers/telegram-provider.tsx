"use client"
import React from "react"
import Script from "next/script"
import { ITelegramUser, IWebApp } from "@/shared/@types"

export interface ITelegramContext {
	webApp?: IWebApp
	user?: ITelegramUser
}

export const TelegramContext = React.createContext<ITelegramContext>({})

export const TelegramProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [webApp, setWebApp] = React.useState<IWebApp | null>(null)
	React.useEffect(() => {
		const app = (window as any).Telegram?.WebApp
		if (app) {
			app.ready()
			setWebApp(app)
		}
	}, [])
	const value = React.useMemo(() => {
		return webApp
			? {
					webApp,
					unsafeData: webApp.initDataUnsafe,
					user: webApp.initDataUnsafe.user,
			  }
			: {}
	}, [webApp])

	return (
		<TelegramContext.Provider value={value}>
			<meta name='color-scheme' content='light' />
			<meta name='format-detection' content='telephone=no' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta name='MobileOptimized' content='176' />
			<meta name='HandheldFriendly' content='True' />
			<meta name='robots' content='noindex,nofollow' />
			<Script
				src='https://telegram.org/js/telegram-web-app.js'
				strategy='beforeInteractive'
			/>
			{children}
		</TelegramContext.Provider>
	)
}
export const useTelegram = () => React.useContext(TelegramContext)
