"use server";

import { LoginFormSchema, SignupFornSchema } from "@/api/login-schemas";
import { error } from "console";
import { redirect, RedirectType } from "next/navigation";
import z from "zod";

export async function submitLoginForm(state: any, formData: FormData) {
	const validationResult = LoginFormSchema.safeParse({
		login: formData.get('email'),
		password: formData.get('password')
	});

	if (!validationResult.success) {
		return z.treeifyError(validationResult.error).properties;
	}

	const { email, password } = validationResult.data;

	await new Promise((resolve) => setTimeout(resolve, 2000));
	redirect('/dashboard', RedirectType.push);
}

export async function submitSignupForm(state: any, formData: FormData) {
	const validationResult = SignupFornSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
		password: formData.get('password')
	});

	if (!validationResult.success) {
		return z.treeifyError(validationResult.error).properties;
	}
}