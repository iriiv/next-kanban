import z from "zod";

export const LoginFormSchema = z.object({
	email: z.email({ error: "Enter valid email." }),
	password: z.string().min(1, { message: "Password field must not be empty." })
});

export const SignupFornSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z.email({ error: "Enter valid email." }),
	password: z.string().min(8, { message: "Password needs to be at least 8 symbols" })
});