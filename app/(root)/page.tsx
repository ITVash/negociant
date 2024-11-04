"use client"
import { Container } from "@/shared/components/shared"
import { useTelegram } from "@/shared/lib/providers"
import { cn } from "@/shared/lib/utils"

export default function Home() {
	const { user, webApp } = useTelegram()
	return (
		<Container className=''>
			{user ? (
				<>
					<h1>
						Welcome {user!.first_name} {user!.last_name}
					</h1>
					User data:
					<pre>{JSON.stringify(user, null, 2)}</pre>
				</>
			) : (
				<p>Приложение необходимо открывать, только в телеграмме </p>
			)}
		</Container>
	)
}
