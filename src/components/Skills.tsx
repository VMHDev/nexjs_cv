import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["ReactJS", "React Native", "TypeScript", "Redux", "Ant Design"]
    },
    {
      category: "Backend",
      items: ["NodeJS", "Koa", "MySQL", "SQL Server"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "AWS", "DevExpress", "Bitbucket", "Sourcetree"]
    }
  ]

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <WrenchScrewdriverIcon className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-primary">Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
