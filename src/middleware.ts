import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export default auth;
export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
