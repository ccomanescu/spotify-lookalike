import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.JWT_SECRET })
    
    const { pathname } = req.nextUrl
    // allow the request if token exists or it's a request for provider api
    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next()
    }

    // if token doesnt exist and it's requesting a protected route, redirect to login
    if (!token && pathname !== "/login") {
        return NextResponse.redirect("/login")
    }
}