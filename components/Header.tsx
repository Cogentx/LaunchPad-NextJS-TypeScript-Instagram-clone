import Image from 'next/image'

export default function Header() {
  return (
    // <div>
    <div className="flex max-w-6xl items-center justify-between bg-white">
      {/* Left */}
      <div>
        <h1>Left</h1>
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
