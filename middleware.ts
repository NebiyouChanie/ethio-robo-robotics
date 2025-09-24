import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Protect all /admin routes
  if (pathname.startsWith('/admin')) {
    const session = req.cookies.get('session')?.value
    if (!session) {
      const url = req.nextUrl.clone()
      url.pathname = '/auth/signin'
      url.searchParams.set('from', pathname)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
 