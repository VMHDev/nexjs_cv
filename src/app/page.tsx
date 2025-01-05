import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Volunteer from '@/components/Volunteer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header />
        <div className="space-y-12">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Volunteer />
        </div>
      </div>
    </main>
  )
}
