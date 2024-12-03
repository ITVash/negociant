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
			<LoaderCircle className='spin-in-0 text-sky-800' />
		</div>
	)
}
