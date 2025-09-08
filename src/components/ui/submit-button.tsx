'use client'

import { IconLoader } from "@tabler/icons-react"
import { useFormStatus } from "react-dom"
import { Button } from "./button";

export function SubmitButton(props: { title: string, pendingTitle?: string }) {
	const { pending } = useFormStatus();
	return pending ?
		(<Button disabled className="w-full">
			<IconLoader className="animate-spin" />
			{props.title}
		</Button >) :
		(<Button type="submit" className="w-full">
			{props.pendingTitle}
		</Button>)
}