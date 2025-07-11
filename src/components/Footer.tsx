export const Footer: React.FC = () => {
    return (
        <div className='w-full py-12 flex bg-white/30 dark:bg-black/30'>
            <div className='w-full lg:w-3/4 m-auto flex flex-col gap-4 justify-center px-2 items-center text-sm text-center text-neutral-950/60 dark:text-neutral-50/65 '>
                {/* <p>
                    QR Code is a registered trademark of DENSO WAVE INCORPORATED
                    in the United States and other countries.
                </p> */}
                <p>
                    This project was created using{" "}
                    <a
                        className='font-semibold text-neutral-950 dark:text-neutral-50/80 hover:text-green-500'
                        href='https://nextjs.org'
                    >
                        next-js
                    </a>{" "}
                    and{" "}
                    <a
                        className='font-semibold text-neutral-950 dark:text-neutral-50/80 hover:text-green-500'
                        href='https://tailwindcss.com'
                    >
                        tailwindcss
                    </a>{" "}
                    and is using the{" "}
                    <a
                        className='font-semibold text-neutral-950 dark:text-neutral-50/80 hover:text-green-500'
                        href='https://developer.spotify.com'
                    >
                        Spotify WebAPI
                    </a>
                </p>
                <p>
                    by{" "}
                    <a
                        className='font-semibold text-neutral-950 dark:text-neutral-50/80 hover:text-green-500'
                        href='https://github.com/jnkoriginals'
                    >
                        Jannik Thieme
                    </a>
                </p>
            </div>
        </div>
    );
};
