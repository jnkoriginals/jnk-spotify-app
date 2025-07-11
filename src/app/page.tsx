import TopContentSection from "@/components/ContentSection";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import UserProfile from "@/components/UserProfile";
import { cookies } from "next/headers";

export default async function Home() {
    const cookieStore = cookies();
    const token = (await cookieStore).get("spotify_access_token")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify`, {
        headers: {
            Cookie: `spotify_access_token=${token}`,
        },
        cache: "no-store",
    });

    const profile = await res.json();

    if (profile.error) {
        return (
            <div className='font-[family-name:var(--font-geist-sans)] flex flex-col items-center'>
                <h1 className='text-4xl font-bold flex justify-center mt-12'>
                    JnK <span className='text-green-500'>Spotify</span> Viewer
                </h1>
                <div className='flex flex-col gap-4 text-center md:w-5/12 mt-28 mx-2.5'>
                    <h2>
                        Welcome to <strong>JnK Spotify Viewer</strong>
                    </h2>
                    <p>
                        Easily explore your Spotify stats. See your top artists,
                        favorite songs, and recently played tracks — all in one
                        place. Log in to get started!
                    </p>
                    <p>Sign in with your spotify account to view your stats.</p>
                    <div className='flex justify-center mt-6'>
                        <LoginButton />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='font-[family-name:var(--font-geist-sans)]'>
            <div className='w-full p-2 border-b-0 border-zinc-800 flex flex-row justify-between space-x-3 items-center'>
                <h1 className='text-lg font-bold'>
                    JnK <span className='text-green-500'>Spotify</span> Viewer
                </h1>
                <div className='flex gap-2'>
                    <UserProfile
                        profile={{
                            display_name: profile.display_name,
                            followers: { total: profile.followers.total },
                            images: [profile.images[0]?.url],
                        }}
                    />
                    <LogoutButton />
                </div>
            </div>

            <TopContentSection token={token!} />
        </div>
    );
}
