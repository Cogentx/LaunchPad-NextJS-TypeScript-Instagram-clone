import Image from 'next/image'

export default function Header() {
  return (
    // <div>
    <div className="flex max-w-6xl items-center justify-between bg-white">
      {/* Left */}
      <div className="relative hidden lg:inline-grid h-24 w-24">
        <Image
          src="https://links.papareact.com/ocw"
          alt="Instagram Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="relative flex-shrink-0 lg:hidden h-10 w-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/jjm"
          alt="Instagram Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* Center - Search Input */}
      <div>
        <h1>Center</h1>
      </div>
      {/* Right */}
      <div>
        <h1>Right</h1>
      </div>
    </div>
    // </div>
  )
}
