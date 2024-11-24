"use client"
import { cn } from "@/shared/lib/utils"
import React from "react"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet"
import { Button } from "../ui/button"
import { ArrowLeft } from "lucide-react"

export const DrawerMenu: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className={cn("flex flex-col justify-between")}>
				<SheetHeader>
					<SheetTitle>Редактирование списков</SheetTitle>
				</SheetHeader>
				тут у нас будут кнопки для редактирования
			</SheetContent>
			<SheetClose>
				<Button className='w-56 h-12 text-base' size='lg'>
					<ArrowLeft className='w-5 mr-2' />
					Вернуться назад
				</Button>
			</SheetClose>
			<SheetFooter>Тут тоже будет что ни будь</SheetFooter>
		</Sheet>
	)
}
