import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Skills() {
  const skills = [
    {
      icon: "/icons/skill1.png",
      level: 90
    },
    {
      icon: "/icons/skill2.png",
      level: 85
    },
    {
      icon: "/icons/skill3.png",
      level: 80
    },
    {
      icon: "/icons/skill4.png",
      level: 75
    },
    {
      icon: "/icons/skill5.png",
      level: 70
    }
  ]

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <WrenchScrewdriverIcon className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-primary">Skills</h2>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-8 h-8 relative">
              <Image
                src={skill.icon}
                alt={`Skill ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link 
          href="https://github.com/VMHDev" 
          target="_blank"
          className="text-primary hover:underline flex items-center justify-center gap-2"
        >
          <div className="lg:hidden">
          <Image
            src="/icons/github.png"
            alt="GitHub"
            width={20}
            height={20}
          />
          </div>
          More details in Github Repositories
        </Link>
      </div>
    </section>
  )
}
