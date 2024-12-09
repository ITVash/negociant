"use client"
import { cn } from "@/shared/lib/utils"
import React from "react"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/shared/components/ui/sheet"
import { Button } from "@/shared/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const DrawerMenu: React.FC<Readonly<React.PropsWithChildren>> = ({
	children,
}) => {
	return (
		<>
			<Sheet>
				<SheetTrigger asChild>{children}</SheetTrigger>
				<SheetContent
					className={cn("flex flex-col justify-between bg-white w-[100%]")}>
					<SheetHeader>
						<SheetTitle>Редактирование списков</SheetTitle>
					</SheetHeader>
					<div className='flex flex-col w-[100%]'>
						<Button className='mb-3'>Создать Маршрут</Button>
						<Button className='mb-3'>Редактирование Пользователей</Button>
						<Button className='mb-3'>Редактирование Организаций</Button>
						<Button>История Маршрутов</Button>
					</div>
					<SheetClose>
						<Button className='w-56 h-12 text-base' size='lg'>
							<ArrowLeft className='w-5 mr-2' />
							Вернуться назад
						</Button>
					</SheetClose>
				</SheetContent>
			</Sheet>
		</>
	)
}
