"use client"
import { Button } from "@/shared/components/ui/button"
import { Checkbox } from "@/shared/components/ui/checkbox"
import { Input } from "@/shared/components/ui/input"
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectGroup,
	SelectLabel,
	SelectContent,
	SelectItem,
} from "@/shared/components/ui/select"
import { TelegramProvider, useTelegram } from "@/app/providers"

export default function Home() {
	const { user, webApp } = useTelegram()
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<TelegramProvider>
				<div>
					{user ? (
						<>
							<h1>Welcome {user?.username}</h1>
							User data:
							<pre>{JSON.stringify(user, null, 2)}</pre>
							Eniter Web App data:
							<pre>{JSON.stringify(webApp, null, 2)}</pre>
						</>
					) : (
						<p>Приложение необходимо открывать, только в телеграмме </p>
					)}
				</div>
			</TelegramProvider>
			<Input />
			<Button>Кнопка</Button>
			<div className='flex'>
				<Checkbox id='test' className='mr-2' />
				<label htmlFor='test' className='cursor-pointer'>
					Это чек бокс
				</label>
			</div>
			<Select>
				<SelectTrigger className='w-[180px]'>
					<SelectValue placeholder='Выберите Клиента!' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value='apple'>Apple</SelectItem>
						<SelectItem value='banana'>Banana</SelectItem>
						<SelectItem value='blueberry'>Blueberry</SelectItem>
						<SelectItem value='grapes'>Grapes</SelectItem>
						<SelectItem value='pineapple'>Pineapple</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}
