import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { SessionPayload } from '@/types/session.payload';
import { cookies } from 'next/headers';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

const cookiesOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'lax' as const,
  expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
  path: '/',
};

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2hr')
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.log('failed to verify session', error);
  }
}

export async function createSession(user: SessionPayload) {
  const expiresAt = new Date(Date.now() + 2 * 60 * 60 * 1000);
  const session = await encrypt({ ...user, expiresAt });
  (await cookies()).set('token', session, {...cookiesOptions, expires: expiresAt});
}
