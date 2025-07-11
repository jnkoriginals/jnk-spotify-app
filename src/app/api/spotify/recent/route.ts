import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const token = req.cookies.get("spotify_access_token")?.value;
    if (!token)
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const res = await fetch(
        "https://api.spotify.com/v1/me/player/recently-played",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await res.json();
    return NextResponse.json(data);
}
