import Image from "next/image";
// import Link from "next/link";

interface Track {
    id: string;
    name: string;
    duration_ms: number;
    popularity: number;
    external_urls: { spotify: string };
    album: {
        images: { url: string }[];
        name: string;
    };
    artists: { name: string }[];
}

export default function TrackCard({
    track,
    index,
}: {
    track: Track;
    index: number;
}) {
    const imageUrl = track.album?.images?.[0]?.url ?? "";
    const durationMin = Math.floor(track.duration_ms / 60000);
    const durationSec = Math.floor((track.duration_ms % 60000) / 1000)
        .toString()
        .padStart(2, "0");

    return (
        // <Link
        //     href={track.external_urls.spotify}
        //     target='_blank'
        //     rel='noopener noreferrer'
        // >
        <div className='bg-gray-100 hover:bg-gray-200 dark:bg-zinc-900 flex dark:hover:bg-zinc-800 p-4 rounded-2xl shadow items-center space-x-4 transition'>
            <h2 className='text-2xl font-semibold'>{index}</h2>

            <Image
                src={imageUrl}
                alt={track.name}
                width={64}
                height={64}
                style={{
                    height: "64px",
                    width: "64px",
                }}
                className='rounded-md object-fill w-16 h-16'
            />
            <div className='w-48'>
                <h2 className='text-black dark:text-white font-semibold text-lg'>
                    {track.name}
                </h2>
                <p className='text-sm text-black dark:text-gray-400'>
                    {track.artists.map((a) => a.name).join(", ")}
                </p>
                <p className='text-xs text-gray-400 dark:text-gray-500'>
                    {durationMin}:{durationSec} min &bull; Popularity:{" "}
                    {track.popularity}
                </p>
            </div>
        </div>
        // </Link>
    );
}
