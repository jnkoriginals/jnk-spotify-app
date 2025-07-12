import { NextResponse } from "next/server";

export async function GET() {
    const scope =
        "user-read-private user-read-email user-top-read user-read-recently-played";
    const params = new URLSearchParams({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID!,
        scope,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
    });

    console.log(params);

    return NextResponse.redirect(
        `https://accounts.spotify.com/authorize?${params.toString()}`
    );
}
