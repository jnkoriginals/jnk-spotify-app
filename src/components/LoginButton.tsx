"use client";

import Image from "next/image";

export default function LoginButton() {
    const handleLogin = () => {
        window.location.href = "/api/auth/login";
    };

    return (
        <button
            onClick={handleLogin}
            className='px-5 py-2 flex gap-2 bg-green-600 hover:bg-green-700 cursor-pointer text-white rounded-full'
        >
            <Image
                src={"./Primary_Logo_White_RGB.svg"}
                alt={"Spotify Logo"}
                width={22}
                height={22}
            />
            Sign in with Spotify
        </button>
    );
}
