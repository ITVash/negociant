"use client"
import { IThemeParams } from "@/shared/@types"
import { Container } from "@/shared/components/shared"
import { Checkbox } from "@/shared/components/ui/checkbox"
import { useTelegram } from "@/shared/lib/providers"
import { cn } from "@/shared/lib/utils"
import { ArrowBigRightDash } from "lucide-react"
import React from "react"

interface ITodo {
	data: Date
}
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
					"flex h-8 gap-1 bg-[#212121] border-b-sky-900 border-b border-solid",
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
			<ul className='mt-3'>
				<li className='h-6 py-1 flex justify-between items-center border-b-sky-900 border-b border-solid'>
					1
					<div className='flex items-center ml-3 w-[100%]'>
						<Checkbox id='1' />
						<label htmlFor='1' className='ml-3'>
							ГМСК
						</label>
					</div>
					<ArrowBigRightDash className='cursor-pointer' />
				</li>
				<li className='h-6 py-1 flex justify-between items-center border-b-sky-900 border-b border-solid'>
					2
					<div className='flex items-center ml-3 w-[100%]'>
						<Checkbox id='2' />
						<label htmlFor='2' className='ml-3'>
							Рынки Донбасса
						</label>
					</div>
					<ArrowBigRightDash className='cursor-pointer' />
				</li>
				<li className='h-6 py-1 flex justify-between items-center border-b-sky-900 border-b border-solid'>
					3
					<div className='flex items-center ml-3 w-[100%]'>
						<Checkbox id='3' />
						<label htmlFor='3' className='ml-3'>
							ОУ Правительство
						</label>
					</div>
					<ArrowBigRightDash className='cursor-pointer' />
				</li>
				<li className='h-6 py-1 flex justify-between items-center border-b-sky-900 border-b border-solid'>
					4
					<div className='flex items-center ml-3 w-[100%]'>
						<Checkbox id='4' />
						<label htmlFor='4' className='ml-3'>
							Пионер
						</label>
					</div>
					<ArrowBigRightDash className='cursor-pointer' />
				</li>
				<li className='h-6 py-1 flex justify-between items-center border-b-sky-900 border-b border-solid'>
					5
					<div className='flex items-center ml-3 w-[100%]'>
						<Checkbox id='5' />
						<label htmlFor='5' className='ml-3'>
							Сидония
						</label>
					</div>
					<ArrowBigRightDash className='cursor-pointer' />
				</li>
				<li className='h-6 py-1 flex justify-between items-center border-b-sky-900 border-b border-solid'>
					6
					<div className='flex items-center ml-3 w-[100%]'>
						<Checkbox id='6' />
						<label htmlFor='6' className='ml-3'>
							Филипенко
						</label>
					</div>
					<ArrowBigRightDash className='cursor-pointer' />
				</li>
				<li className='h-6 py-1 flex justify-between items-center border-b-sky-900 border-b border-solid'>
					7
					<div className='flex items-center ml-3 w-[100%]'>
						<Checkbox id='7' />
						<label htmlFor='7' className='ml-3'>
							Нагорнюк
						</label>
					</div>
					<ArrowBigRightDash className='cursor-pointer' />
				</li>
			</ul>
		</Container>
	)
}
