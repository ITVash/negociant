import { cn } from "@/shared/lib/utils"
import { ShieldAlert } from "lucide-react"
import React from "react"

interface INotAccessProps {
	className?: string
}

export const NotAccess: React.FC<INotAccessProps> = ({ className }) => {
	return (
		<div
			className={cn(
				"flex flex-row items-center justify-center min-h-screen text-lg font-bold w-[100%] mx-auto",
				className,
			)}>
			<ShieldAlert />
			<p className='text-center'>
				У вас нет доступа к приложению. Обратитесь к администратору!
			</p>
		</div>
	)
}
