import { cn } from "@/shared/lib/utils"
import React from "react"
import { WorkListItems } from "./WorkListItems"

type TItem = {
	idw: number
	organization: string
}

interface WorkListProps {
	className?: string
	items: TItem[]
}

export const WorkList: React.FC<WorkListProps> = ({ className, items }) => {
	return (
		<ul className={cn("", className)}>
			{items &&
				items.map((item, id) => (
					<>
						<WorkListItems
							key={id}
							idw={item.idw}
							organization={item.organization}
						/>
					</>
				))}
		</ul>
	)
}
