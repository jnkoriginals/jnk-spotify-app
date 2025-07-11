import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const token = req.cookies.get("spotify_access_token")?.value;

    if (!token)
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const url = new URL(req.url);
    const time_range = url.searchParams.get("time_range") || "medium_term";
    const limit = url.searchParams.get("limit") || "10";

    const baseUrl = "https://api.spotify.com/v1/me/top";

    // Construct URLs for both endpoints
    const artistsUrl = `${baseUrl}/artists?time_range=${time_range}&limit=${limit}`;
    const tracksUrl = `${baseUrl}/tracks?time_range=${time_range}&limit=${limit}`;

    try {
        const [artistsRes, tracksRes] = await Promise.all([
            fetch(artistsUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            fetch(tracksUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        ]);

        if (!artistsRes.ok || !tracksRes.ok) {
            const error = {
                artists: artistsRes.ok ? null : await artistsRes.json(),
                tracks: tracksRes.ok ? null : await tracksRes.json(),
            };
            return NextResponse.json({ error }, { status: 500 });
        }

        const [artists, tracks] = await Promise.all([
            artistsRes.json(),
            tracksRes.json(),
        ]);

        return NextResponse.json({ artists, tracks });
    } catch (error) {
        return NextResponse.json(
            { error: `Failed to fetch data: ${error}` },
            { status: 500 }
        );
    }
}
