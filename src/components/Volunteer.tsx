import { HeartIcon } from '@heroicons/react/24/outline'

export default function Volunteer() {
  const activities = [
    {
      title: "National University Entrance Exam - Support Campaign",
      period: "2016 - 2017"
    },
    {
      title: "Spring Volunteer Campaign",
      period: "2016 - 2017"
    },
    {
      title: "Blood Donation",
      period: "2014 - Now"
    }
  ]

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <HeartIcon className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-primary">Volunteer Activities</h2>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-700">{activity.title}</span>
            <span className="text-gray-500 text-sm">{activity.period}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
