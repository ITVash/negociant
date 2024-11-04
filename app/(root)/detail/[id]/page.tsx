import { Container } from "@/shared/components/shared"
import { cn } from "@/shared/lib/utils"

export default async function Detail({
	params: { id },
}: {
	params: { id: string }
}) {
	return (
		<Container className='text-[#FFFFFF]'>
			<div className={cn("")}>Detail {id}</div>
		</Container>
	)
}
