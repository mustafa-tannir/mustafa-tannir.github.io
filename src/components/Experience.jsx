import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { experience } from '../data/portfolio'

function ExperienceCard({ item, isLast }) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-5 top-12 bottom-0 w-px bg-gray-800" />
      )}

      {/* Icon */}
      <div className="relative w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1 z-10">
        <Briefcase size={18} className="text-primary" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <div className="card">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <div>
              <h3 className="font-bold text-lg">{item.role}</h3>
              <p className="text-primary font-medium">{item.company}</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-xs font-medium whitespace-nowrap">
              {item.startDate} — {item.endDate}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
            <MapPin size={13} />
            {item.location}
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          {item.highlights && item.highlights.length > 0 && (
            <ul className="space-y-1.5 mb-4">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                  <span className="text-primary mt-1">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          )}

          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800">
              {item.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  if (!experience || experience.length === 0) return null

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary font-semibold mb-2">Where I've worked</p>
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle mt-2">
          My professional journey so far.
        </p>

        <div className="max-w-3xl">
          {experience.map((item, index) => (
            <ExperienceCard
              key={item.id}
              item={item}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
