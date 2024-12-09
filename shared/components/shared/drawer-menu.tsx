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
import Link from "next/link"

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
						<Link
							className='mb-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
							href={"/works"}>
							Создать Маршрут
						</Link>
						<Link
							className='mb-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
							href={"/users"}>
							Редактирование Пользователей
						</Link>
						<Link
							className='mb-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
							href={"/organization"}>
							Редактирование Организаций
						</Link>
						<Link
							className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
							href={""}>
							История Маршрутов
						</Link>
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
