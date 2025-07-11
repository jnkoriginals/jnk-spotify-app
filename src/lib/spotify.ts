export async function getAccessToken(code: string) {
    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization:
                "Basic " +
                Buffer.from(
                    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                ).toString("base64"),
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
        }),
    });

    return res.json(); // access_token, expires_in, refresh_token
}
