import { cn } from "@/shared/lib/utils"
import React from "react"
import { X } from "lucide-react"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet"

interface IDrawerMenuProps {
	className?: string
}

export const DrawerMenu: React.FC<
	React.PropsWithChildren<IDrawerMenuProps>
> = ({ className, children }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className={cn("flex flex-col justify-between", className)}>
				<SheetHeader>
					<SheetTitle>Редактирование списков</SheetTitle>
				</SheetHeader>
			</SheetContent>
			<SheetClose></SheetClose>
		</Sheet>
	)
}
