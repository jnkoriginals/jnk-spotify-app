import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const response = NextResponse.redirect(new URL("/", req.url));

    response.cookies.set("spotify_access_token", "", {
        httpOnly: true,
        path: "/",
        expires: new Date(0),
    });

    return response;
}
