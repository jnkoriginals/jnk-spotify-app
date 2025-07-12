"use client";

import { useEffect, useState } from "react";
import SegmentedButton from "./SegmentedButton";
import ArtistCard from "./ArtistCard";
import TrackCard from "./TrackCard";

type Props = {
    token: string;
};

export default function TopContentSection({ token }: Props) {
    const [range, setRange] = useState("medium_term");
    const [artists, setArtists] = useState<any[]>([]);
    const [tracks, setTracks] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [recentTracks, setRecentTracks] = useState<any[]>([]);

    useEffect(() => {
        const fetchTopData = async () => {
            setLoading(true);
            const res = await fetch(`/api/spotify/top?time_range=${range}`, {
                headers: {
                    Cookie: `spotify_access_token=${token}`,
                },
                cache: "no-store",
            });
            const data = await res.json();
            setArtists(data.artists.items);
            setTracks(data.tracks.items);
            setLoading(false);
        };

        fetchTopData();
    }, [range, token]);

    useEffect(() => {
        fetchRecent();
    }, []);

    const fetchRecent = async () => {
        const recentRes = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/recent`,
            {
                headers: {
                    Cookie: `spotify_access_token=${token}`,
                },
                cache: "no-store",
            }
        );

        const recent = await recentRes.json();
        console.log(recent.items);

        setRecentTracks(recent.items);
    };

    return (
        <div className='flex flex-col justify-center items-center font-[family-name:var(--font-geist-sans)] mt-4'>
            <SegmentedButton
                segments={[
                    { label: "Last Month", value: "short_term" },
                    { label: "Last 6 Months", value: "medium_term" },
                    { label: "Last Year", value: "long_term" },
                ]}
                defaultValue='medium_term'
                onChange={(value) => setRange(value)}
            />
            {loading ? (
                <div className='text-sm flex text-center justify-center items-center text-gray-500 mt-4'>
                    Loading...
                </div>
            ) : (
                <div className='flex flex-col space-y-5  space-x-0 md:flex-row md:space-x-10 mt-4'>
                    <div>
                        <h1 className='text-2xl text-center font-semibold mt-2.5 mb-4'>
                            Top Artists:
                        </h1>
                        <div className='space-y-4'>
                            {artists.map((artist: any, index: number) => (
                                <ArtistCard
                                    index={index + 1}
                                    key={artist.id}
                                    artist={artist}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl text-center font-semibold mt-2.5 mb-4'>
                            Top Tracks:
                        </h1>
                        <div className='space-y-4'>
                            {tracks.map((track: any, index: number) => (
                                <TrackCard
                                    index={index + 1}
                                    key={track.id}
                                    track={track}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div className='flex flex-col space-y-5  space-x-0 md:flex-row md:space-x-10 mt-4'>
                <div>
                    <h1 className='text-2xl text-center font-semibold mt-2.5 mb-4'>
                        Recently Played:
                    </h1>
                    <div className='space-y-4'>
                        {recentTracks.map((track: any, index: number) => (
                            <TrackCard
                                index={index + 1}
                                key={track.track.id}
                                track={track.track}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
