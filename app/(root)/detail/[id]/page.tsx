import { cn } from "@/shared/lib/utils"

export default async function Detail({
	params: { id },
}: {
	params: { id: string }
}) {
	return <div className={cn("")}>Detail {id}</div>
}
