import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
  // 'data' comes back from 'useSession()' | rename to 'session'
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="flex max-w-6xl items-center justify-between bg-white px-5 lg:mx-auto">
        {/* Left */}
        <div>
          <div className="relative hidden h-14 w-40 items-center lg:flex">
            <Image
              src="https://links.papareact.com/ocw"
              alt="Instagram Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="relative h-10 w-10 flex-shrink-0 cursor-pointer lg:hidden">
            <Image
              src="https://links.papareact.com/jjm"
              alt="Instagram Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* Center - Search Input */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 text-gray-500" />
            </div>
            <input
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          {session ? (
            <>
              <div className="navBtn relative">
                <PaperAirplaneIcon className="rotate-45" />
                <div className="absolute -top-2 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <div className="inline-flex space-x-3">
                {session?.user?.image && (
                  // Next Image requires known image URLs
                  <img
                    onClick={() => signOut()}
                    className="h-10 w-10 cursor-pointer rounded-full"
                    src={session?.user?.image}
                    alt="profile pic"
                  />
                )}
              </div>
            </>
          ) : (
            <div>
              <button onClick={() => signIn()}>Sign In</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
