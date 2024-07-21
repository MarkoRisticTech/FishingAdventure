import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

export const UserInfo = () => {
    const { data: session } = useSession()
    const [isOpen, setIsOpen] = useState(false)

    if (!session) {
        return null
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="avatar cursor-pointer"
            >
                <div className="rounded-full w-10 h-10 m-1">
                    <Image
                        src={session?.user?.image || '/userImage'}
                        alt="User"
                        width={40}
                        height={40}
                        className="object-cover"
                    />
                </div>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-md glass ring-1 ring-black ring-opacity-5 z-50">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <div className="px-4 py-2">
                            <p className="text-sm text-primary">
                                {session?.user?.name}
                            </p>
                            <p className="text-sm text-primary">
                                {session?.user?.email}
                            </p>
                        </div>
                        <div className="border-t"></div>
                        <div className="px-4 py-2">
                            <button
                                onClick={() => signOut()}
                                className="btn btn-primary text-sm w-full"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
