import { AcademicCapIcon } from '@heroicons/react/24/outline'

export default function Education() {
  const education = [
    {
      degree: "The Bachelor of Science in Information Technology",
      school: "University Of Science Ho Chi Minh City",
      period: "2018 - 2020",
      gpa: "GPA: 6.96"
    },
    {
      degree: "The Associate of Science in Information Technology",
      school: "University Of Science Ho Chi Minh City",
      period: "2014 - 2017",
      gpa: "GPA: 7.69"
    }
  ]

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <AcademicCapIcon className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-primary">Education</h2>
      </div>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.school}</p>
            <div className="flex justify-between text-gray-500 text-sm mt-1">
              <span>{edu.period}</span>
              <span>{edu.gpa}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
