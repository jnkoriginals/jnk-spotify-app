import Image from "next/image";

interface Artist {
    id: string;
    name: string;
    images: { url: string; height: number; width: number }[];
    followers: { total: number };
    popularity: number;
    external_urls: { spotify: string };
    genres: string[];
}

export default function ArtistCard({
    artist,
    index,
}: {
    artist: Artist;
    index: number;
}) {
    const image = artist.images?.find((img) => img.height === 160);

    return (
        // <Link
        //     href={artist.external_urls.spotify}
        //     target='_blank'
        //     rel='noopener noreferrer'
        // >
        <div className='bg-zinc-900 flex hover:bg-zinc-800 p-4 rounded-2xl shadow items-center space-x-4 transition'>
            <h2 className='text-2xl font-semibold'>{index}</h2>
            <Image
                src={image?.url || ""}
                alt={artist.name}
                width={64}
                height={64}
                style={{
                    height: "64px",
                    width: "64px",
                }}
                className='rounded-full object-fill w-16 h-16 '
            />

            <div className='w-48'>
                <h2 className='text-white font-semibold text-lg'>
                    {artist.name}
                </h2>
                <p className='text-sm text-gray-400'>
                    {artist.followers.total.toLocaleString()} Follower
                </p>
                <p className='text-xs text-gray-500'>
                    {artist.genres?.slice(0, 2).join(", ")}
                </p>
            </div>
        </div>
        // </Link>
    );
}
