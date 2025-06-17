import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === process.env.NEXT_PUBLIC_DEVTOOL_URL) {
    return new NextResponse(null, { status: 204 });
  }

  return NextResponse.next();
}
