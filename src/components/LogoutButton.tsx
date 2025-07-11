"use client";

interface LogoutProps {
    className?: string;
}

export default function LogoutButton(props: LogoutProps) {
    const handleLogout = () => {
        window.location.href = "/api/auth/logout";
    };

    return (
        <>
            <a
                className={`p-2 pl-2.5 h-9 dark:hover:bg-zinc-800 hover:bg-gray-200 text-gray-900 rounded-lg dark:text-white group cursor-pointer ${props.className}`}
                onClick={handleLogout}
                tabIndex={0}
                aria-label='Log Out'
                title='Log Out'
            >
                <svg
                    className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 351 331'
                >
                    <path d='M153,331.18H68.73C30.83,331.18,0,297.93,0,257.06V74.11C0,33.25,30.83,0,68.73,0h84.28c37.9,0,68.73,33.25,68.73,74.11v12.85c0,8.84-7.16,16-16,16s-16-7.16-16-16v-12.85c0-23.22-16.47-42.11-36.73-42.11H68.73c-20.25,0-36.73,18.89-36.73,42.11v182.95c0,23.22,16.47,42.11,36.73,42.11h84.28c20.25,0,36.73-18.89,36.73-42.11v-12.85c0-8.84,7.16-16,16-16s16,7.16,16,16v12.85c0,40.87-30.83,74.11-68.73,74.11Z' />
                    <path d='M310.98,181.59H108.88c-8.84,0-16-7.16-16-16s7.16-16,16-16h202.1c8.84,0,16,7.16,16,16s-7.16,16-16,16Z' />
                    <path d='M272.54,244.15c-4.09,0-8.19-1.56-11.31-4.69-6.25-6.25-6.25-16.38,0-22.63l51.25-51.25-51.25-51.25c-6.25-6.25-6.25-16.38,0-22.63,6.25-6.25,16.38-6.25,22.63,0l62.57,62.57c6.25,6.25,6.25,16.38,0,22.63l-62.57,62.57c-3.12,3.12-7.22,4.69-11.31,4.69Z' />
                </svg>
            </a>
        </>
    );
}
