import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "@/lib/spotify";

export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get("code");
    if (!code) return NextResponse.redirect(new URL("/", req.url));

    const tokenData = await getAccessToken(code);

    const redirectUrl = new URL("/", req.url);
    const response = NextResponse.redirect(redirectUrl);

    response.cookies.set("spotify_access_token", tokenData.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: tokenData.expires_in,
        sameSite: "lax",
    });

    return response;
}
