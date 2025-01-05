import Image from 'next/image'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-32 h-32 relative">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-primary">VŨ MẠNH HÙNG</h1>
          <h2 className="text-xl text-secondary mt-2">ReactJS Developer</h2>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPinIcon className="w-5 h-5 text-gray-500" />
              <span>Tan Binh, Ho Chi Minh City</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <PhoneIcon className="w-5 h-5 text-gray-500" />
              <span>0915195563</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <EnvelopeIcon className="w-5 h-5 text-gray-500" />
              <span>vmhpublic2017@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
