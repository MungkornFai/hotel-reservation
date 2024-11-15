'use server';
import z from 'zod';
import bcrypt from 'bcrypt';
import { db } from '@/drizzle/db';
import { eq } from 'drizzle-orm';
import { users } from '@/drizzle/schema';
import { redirect } from 'next/navigation';
import { createSession } from '@/lib/session';

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
      errors?: {
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
  // 1. Validate form fields
  const validateField = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });
  // 2. check if all fields are valid
  if (!validateField.success) {
    return {
      errors: validateField.error.flatten().fieldErrors,
    };
  }
  // 3. prepare data from
  const { name, email, password } = validateField.data;
  const hashPassword = await bcrypt.hash(password, 10);
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email));
  if (existingUser.length > 0) {
    return {
      message: 'User already exists',
    };
  }
  const data = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashPassword,
    })
    .returning({ id: users.id, role: users.role });
  const user = data[0];
  await createSession({ userId: user.id.toString(), role: user.role });
  return redirect('/');
}
