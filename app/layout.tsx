import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { TelegramProvider } from "@/shared/lib/providers"

const nunito = Nunito({
	subsets: ["cyrillic"],
	variable: "--font-nunito",
	weight: ["400", "500", "600", "700", "800", "900"],
})
export const metadata: Metadata = {
	title: `ТД Негоциант`,
	description: "Приложение для построение логистики",
	icons: {
		icon: "./favicon.svg",
		shortcut: "./favicon.svg",
	},
}

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	return (
		<html lang='ru' className='light'>
			<body suppressHydrationWarning={true} className={nunito.className}>
				<TelegramProvider>{children}</TelegramProvider>
				{modal}
			</body>
		</html>
	)
}
