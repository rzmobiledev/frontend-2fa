import {NextRequest, NextResponse} from "next/server";

const protectedRoutes = ["/home", "/sessions"]
const publicRoutes = [
    "/",
    "/signup",
    "/confirm-account",
    "forgot-password",
    "reset-password",
    "/verify-mfa"
]

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    
    if(path === "/logout"){
        const response = NextResponse.redirect(new URL("/", req.nextUrl));
        response.cookies.delete('accessToken')
    }

    const accessToken = req.cookies.get('accessToken')?.value

    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)
    if(isProtectedRoute && !accessToken) {
        return NextResponse.redirect((new URL("/", req.nextUrl)))
    }

    else if(isPublicRoute && accessToken) {
        return NextResponse.redirect(new URL("/home", req.nextUrl))
    }

    return NextResponse.next()

}