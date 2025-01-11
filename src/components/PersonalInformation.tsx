import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function PersonalInformation() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col gap-6">
        <div className="w-full aspect-square max-w-[180px] relative mx-auto">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">VŨ MẠNH HÙNG</h1>
          <h2 className="text-xl text-secondary mt-2">ReactJS Developer</h2>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="w-5 h-5 relative">
                <Image
                  src="/icons/birthday.png"
                  alt="Birthday"
                  fill
                  className="object-contain"
                />
              </div>
              <span>25/07/1996</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="w-5 h-5 relative">
                <Image
                  src="/icons/male.png"
                  alt="Gender"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Male</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <MapPinIcon className="w-5 h-5 text-gray-500" />
              <span>Tan Binh, Ho Chi Minh City</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <PhoneIcon className="w-5 h-5 text-gray-500" />
              <span>0915195563</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <EnvelopeIcon className="w-5 h-5 text-gray-500" />
              <span>vmhpublic2017@gmail.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="w-5 h-5 relative">
                <Image
                  src="/icons/linkedin.png"
                  alt="Linkedin"
                  fill
                  className="object-contain"
                />
              </div>
              <Link
                href="https://www.linkedin.com/in/vmhdev/"
                target="_blank"
                className="text-primary hover:underline flex items-center gap-2"
              >
                in/vmhdev
              </Link>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="w-5 h-5 relative">
                <Image
                  src="/icons/github.png"
                  alt="Github"
                  fill
                  className="object-contain"
                />
              </div>
              <Link
                href="https://github.com/VMHDev"
                target="_blank"
                className="text-primary hover:underline flex items-center gap-2"
              >
                github.com/VMHDev
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
