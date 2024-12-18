import { cn } from "@/shared/lib/utils"
import { ArrowBigRightDash } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Checkbox } from "../ui/checkbox"

interface WorkListItemsProps {
	className?: string
	idw: number
	organization: string
}

export const WorkListItems: React.FC<WorkListItemsProps> = ({
	className,
	idw,
	organization,
}) => {
	return (
		<li
			className={cn(
				"h-8 py-1 mb-1 flex justify-between items-center border-b-sky-900 border-b border-solid",
				className,
			)}>
			{idw}
			<Checkbox id={String(idw)} className={cn("ml-3")} />
			<Link
				href={`/detail/${String(idw)}`}
				className='ml-3 mr-3 flex flex-1 justify-between'>
				{organization}
				<ArrowBigRightDash className='cursor-pointer' />
			</Link>
		</li>
	)
}
