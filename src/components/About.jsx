import { MapPin, Mail } from 'lucide-react'
import { personal } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-primary font-semibold mb-2">About Me</p>
          <h2 className="section-title">
            A little bit about <span className="gradient-text">myself</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mt-4 mb-6 text-lg">
            {personal.bio}
          </p>

          <div className="flex flex-wrap gap-5">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={15} className="text-primary shrink-0" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail size={15} className="text-primary shrink-0" />
              <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">
                {personal.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
