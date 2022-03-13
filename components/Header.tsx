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

export default function Header() {
  return (
    <div>
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
          <div className="relative navBtn">
            <PaperAirplaneIcon className="rotate-45" />
            <div className="absolute text-xs text-white flex items-center justify-center rounded-full -top-2 -right-2 w-5 h-5 bg-red-500 animate-pulse">3</div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <div className="inline-flex space-x-3">
            <Image
              className="cursor-pointer rounded-full"
              height={40}
              width={40}
              objectFit="cover"
              layout="fixed"
              src="https://links.papareact.com/kxk"
              alt="profile pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
