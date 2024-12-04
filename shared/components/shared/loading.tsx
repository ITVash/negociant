import { cn } from "@/shared/lib/utils"
import { LoaderCircle } from "lucide-react"
import React from "react"

interface LoadingProps {
	className?: string
}

export const Loading: React.FC<LoadingProps> = ({ className }) => {
	return (
		<div
			className={cn(
				"flex flex-col w-[100%] h-screen items-center justify-center m-auto",
				className,
			)}>
			<LoaderCircle className='animate-spin text-sky-800 w-4 h-4' />
		</div>
	)
}
