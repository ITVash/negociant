import { cn } from "@/shared/lib/utils"
import { LoaderCircle } from "lucide-react"
import React from "react"
import Logo from "@/public/favicon.svg"
import Image from "next/image"

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
			<Image src={Logo} width={100} height={100} alt='Logo' />
			<LoaderCircle
				className='animate-spin text-sky-800 w-4 h-4'
				width={25}
				height={25}
			/>
		</div>
	)
}
