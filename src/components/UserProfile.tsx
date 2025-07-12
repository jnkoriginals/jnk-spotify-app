import Image from "next/image";
import { User } from "lucide-react";

interface UserProfileProps {
    profile: {
        display_name: string;
        followers: { total: number };
        images: { url: string }[];
    };
}

export default function UserProfile({ profile }: UserProfileProps) {
    const imageUrl = profile.images?.[0]?.url ?? null;

    return (
        <div className='flex items-center space-x-3 '>
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt='Profilbild'
                    width={26}
                    height={26}
                    className='rounded-full object-cover'
                />
            ) : (
                <div className='w-8 h-8 rounded-full flex items-center justify-center'>
                    <User className='w-8 h-8 text-black dark:text-white' />
                </div>
            )}
            <div>
                <p className='text-md font-semibold text-black dark:text-white'>
                    {profile.display_name}
                </p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                    {profile.followers.total.toLocaleString()} Follower
                </p>
            </div>
        </div>
    );
}
