import 'server-only';

import { cookies } from 'next/headers';
import { decrypt } from './session';
import { cache } from 'react';
import { redirect } from 'next/navigation';
import { db } from '@/drizzle/db';
import { users } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('token')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect('/signup');
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = await db.query.users.findMany({
      where: eq(users.id, session.userId),
      columns: {
        id: true,
        name: true,
        email: true,
      },
    });

    const user = data[0];

    return user;
  } catch (error) {
    console.log('Failed to fetch user', error);
    return null;
  }
});
