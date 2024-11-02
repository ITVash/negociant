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
import { cn } from "@/shared/lib/utils"

export default function Home() {
	const { user, webApp } = useTelegram()
	const tgColorText = webApp ? `text-[${webApp?.themeParams.text_color}]` : ""
	return (
		<div className={cn("flex flex-col max-w-full min-h-[100vh]", tgColorText)}>
			<div className={cn("flex mt-4 max-w-sm", tgColorText)}>
				{user ? (
					<>
						<h1 className={tgColorText}>
							Welcome {user!.first_name} {user!.last_name}
						</h1>
						User data:
						<pre className={tgColorText}>{JSON.stringify(user, null, 2)}</pre>
					</>
				) : (
					<p className={tgColorText}>
						Приложение необходимо открывать, только в телеграмме{" "}
					</p>
				)}
			</div>
			<Input className={tgColorText} />
			<Button>Кнопка</Button>
			<div className='flex'>
				<Checkbox id='test' className={cn("mr-2", tgColorText)} />
				<label htmlFor='test' className={cn("cursor-pointer", tgColorText)}>
					Это чек бокс
				</label>
			</div>
			<Select>
				<SelectTrigger className={cn("w-[180px]", tgColorText)}>
					<SelectValue placeholder='Выберите Клиента!' />
				</SelectTrigger>
				<SelectContent className={tgColorText}>
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
