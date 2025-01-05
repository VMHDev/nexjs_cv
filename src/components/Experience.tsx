import { BriefcaseIcon } from '@heroicons/react/24/outline'

export default function Experience() {
  const experiences = [
    {
      title: "Web Application Developer",
      company: "Mid-Developer in Innotech VietNam Corporation",
      period: "11/2020 - Now",
      details: [
        "Framework: ReactJS, React Native, NodeJS, Koa",
        "Database: MySQL",
        "Other technical: Typescript, React Hooks, Redux Toolkit, AWS, S3S"
      ]
    },
    {
      title: "KingWork: Human Resource Management",
      details: [
        "Framework: ReactJS",
        "Other technical: Javascript, Redux Thunk, Ant Design, Styled Components"
      ]
    },
    {
      title: "RentPay: Payment wallet for renter",
      details: [
        "Framework: ReactJS",
        "Other technical: Graphql, Redux toolkit, Ant Design, Less CSS"
      ]
    },
    {
      title: "Desktop Application Developer",
      company: "Junior Developer in PhanManYang Information Technology Co.Ltd",
      period: "04/2018 - 06/2020",
      details: [
        "Winform, SQL Server",
        "DevExpress, SAP Report, Bartender seagull",
        "Using Bitbucket, Sourcetree"
      ]
    }
  ]

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <BriefcaseIcon className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-primary">Work Experience</h2>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            {exp.company && <p className="text-gray-600">{exp.company}</p>}
            {exp.period && <p className="text-gray-500 text-sm">{exp.period}</p>}
            <ul className="mt-2 list-disc list-inside text-gray-700">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
