import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { decrypt } from './lib/session';

const protectedRoute = ['/dashboard'];
const publicRoute = ['/', '/signup'];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectRoute = protectedRoute.includes(path);
  const cookie = (await cookies()).get('token')?.value;
  const session = await decrypt(cookie);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
