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
import { useTelegram } from "@/shared/lib/providers"

export default function Home() {
	const { user } = useTelegram()
	return (
		<div className='flex flex-col max-w-full min-h-[100vh]'>
			<div className='flex mt-4 max-w-sm'>
				{user ? (
					<>
						<h1>
							Welcome {user!.first_name} {user!.last_name}
						</h1>
						User data:
						<pre>{JSON.stringify(user, null, 2)}</pre>
					</>
				) : (
					<p>Приложение необходимо открывать, только в телеграмме </p>
				)}
			</div>
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
