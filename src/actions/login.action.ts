"use server"

import { LoginFormSchema } from "@/api/login-form-schema";
import { redirect, RedirectType } from "next/navigation";

export async function submitLoginForm(state: any, formData: FormData) {
	const validationResult = LoginFormSchema.safeParse({
		login: formData.get('login'),
		password: formData.get('password')
	});

	if (!validationResult.success) {
		return {
			errors: validationResult.error.flatten().fieldErrors,
		};
	}

	const { login, password } = validationResult.data;

	await new Promise((resolve) => setTimeout(resolve, 2000));
	redirect('/dashboard', RedirectType.push);
}