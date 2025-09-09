import z from "zod";

export const LoginFormSchema = z.object({
	login: z.string().min(1, { message: "Login is required." }),
	password: z.string().min(1, { message: "Password field must not be empty." })
});