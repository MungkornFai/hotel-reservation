'use server';
import z from 'zod';
const SignupFormSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  email: z.string().email({
    message: 'Invalid email',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
});

export type FormState =
  | {
      errors: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;


export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validateField = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validateField.success) {
    return {
      errors: validateField.error.flatten().fieldErrors,
    };
  }
}
