import { UserIcon } from '@heroicons/react/24/outline'

export default function About() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <UserIcon className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-primary">About Me</h2>
      </div>
      <div className="prose max-w-none">
        <p>
          I am a ReactJS Developer with over 3 years of experience in web and desktop application development. 
          My expertise includes building responsive web applications using modern JavaScript frameworks and libraries. 
          I have a strong foundation in both frontend and backend development, with experience in various technologies 
          including ReactJS, React Native, NodeJS, and database management systems.
        </p>
        <div className="mt-4">
          <p className="font-semibold">Links:</p>
          <ul>
            <li>
              <a href="https://github.com/VMHDev" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                github.com/VMHDev
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/vmhdev" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/vmhdev
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
