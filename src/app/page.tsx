import PersonalInformation from '@/components/PersonalInformation'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Volunteer from '@/components/Volunteer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <PersonalInformation />
            <Skills />
          </div>
          <div className="space-y-12">
            <About />
            <Experience />
            <Education />
            <Volunteer />
          </div>
        </div>
      </div>
    </main>
  )
}
