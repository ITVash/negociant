"use client"
import { Container, Loading } from "@/shared/components/shared"
import { Input } from "@/shared/components/ui/input"
import { useTelegram } from "@/shared/lib/providers"
import { cn } from "@/shared/lib/utils"
import { useOrganization } from "@/shared/store"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

export default function EditOrganization() {
	const { webApp } = useTelegram()
	const router = useRouter()
	const { organization, fetchOrganizationAll } = useOrganization()
	const [searchInput, setSearchInput] = React.useState<string>("")
	const searchHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value)
	}
	const delitSearchInput = () => {
		setSearchInput("")
	}
	React.useEffect(() => {
		fetchOrganizationAll()
	}, [])
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
	if (!webApp && !organization) {
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
					value={searchInput}
					onChange={searchHadler}
				/>
				<X
					className={cn(
						"absolute right-[5px] cursor-pointer invisible",
						searchInput.length > 0 && "visible",
					)}
					size={16}
					onClick={delitSearchInput}
				/>
			</div>
			<h3 className='text-lg text-center'>Список организаций.</h3>
			<ul>
				{organization.map((item, id) => (
					<li
						key={item.name + id}
						className='flex justify-between py-1 border-b-[1px] border-blue-500 px-1 hover:bg-blue-100/50 cursor-pointer'>
						<div className='flex-1'>
							{item.name}-{item.id}
						</div>
						<button className='flex justify-center items-center border-[1px] border-blue-500 rounded-[4px] w-[22px] h-[22px] pb-2'>
							...
						</button>
					</li>
				))}
			</ul>
		</Container>
	)
}
