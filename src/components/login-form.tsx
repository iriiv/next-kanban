'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormState, useFormStatus } from "react-dom"
import { submitLoginForm } from "@/actions/login.action"
import { LoaderIcon } from "lucide-react"
import Form from "next/form"
import { useActionState } from "react"

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"form">) {
	const [state, action, pending] = useActionState(submitLoginForm, undefined);

	return (
		<Form className={cn("flex flex-col gap-6", className)} {...props} action={action} noValidate >
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Login to your account</h1>
				<p className="text-muted-foreground text-sm text-balance">
					Enter your credentials below to login to your account
				</p>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-3">
					<Label htmlFor="login">Login</Label>
					<Input name="login" id="login" required />
					{state?.email?.errors && (
						<p className="text-xs text-red-500">{state.email.errors}</p>
					)}
				</div>
				<div className="grid gap-3">
					<Label htmlFor="password">Password</Label>
					<Input name="password" id="password" type="password" required />
					{state?.password?.errors && (
						<p className="text-xs text-red-500">{state.password.errors}</p>
					)}
				</div>
				{pending ? (
					<Button className="w-full" disabled>
						<LoaderIcon className="animate-spin" />
						Pending
					</Button>
				) : (
					<Button type="submit" className="w-full">
						Login
					</Button>
				)}
			</div>
			<div className="text-center text-sm">
				Don&apos;t have an account?{" "}
				<a href="/signup" className="underline underline-offset-4">
					Sign up
				</a>
			</div>
		</Form>
	)
}