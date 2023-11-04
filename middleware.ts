import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/", "/sign-up"];
const protectedRoutes = ["/users", "/dashboard"];

export default function middleware(req: NextRequest) {
  let token = req.cookies.get("ancr-auth-token");
  console.log({ token });
  if (token) {
    if (authRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  } else {
    if (protectedRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}

export const config = {
  matcher: ["/", "/sign-up", "/users", "/dashboard"],
};
