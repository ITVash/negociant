"use client"
import { Container, Loading } from "@/shared/components/shared"
import { Input } from "@/shared/components/ui/input"
import { useTelegram } from "@/shared/lib/providers"
import { cn } from "@/shared/lib/utils"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

export default function EditOrganization() {
	const { webApp } = useTelegram()
	const router = useRouter()

	React.useEffect(() => {
		if (webApp) {
			webApp.BackButton.isVisible = true

			webApp.onEvent("backButtonClicked", router.back)
		}
		return () => {
			if (webApp) {
				webApp.BackButton.isVisible = false
				webApp.offEvent("backButtonClicked", router.back)
			}
		}
	}, [])
	if (!webApp) {
		return <Loading />
	}
	return (
		<Container
			className={cn(`text-[${webApp?.themeParams.text_color}] flex-col`)}>
			<div className={cn("flex w-full relative items-center mt-4 mb-2")}>
				<Search
					className={cn("text-gray-500 absolute left-[5px] z-10")}
					size={16}
				/>
				<Input
					type='text'
					className='w-full pl-6 pr-6'
					placeholder='Название организации...'
				/>
				<X className={cn("absolute right-[5px] cursor-pointer")} size={16} />
			</div>
			EditOrganization
		</Container>
	)
}
