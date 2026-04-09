import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { education, certifications } from '../data/portfolio'

function EducationCard({ item }) {
  return (
    <div className="card">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <GraduationCap size={22} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg">{item.degree}</h3>
          <p className="text-primary font-medium">{item.institution}</p>

          <div className="flex flex-wrap gap-3 mt-2 mb-3">
            <span className="flex items-center gap-1.5 text-gray-500 text-sm">
              <Calendar size={13} />
              {item.startYear} — {item.endYear}
            </span>
            <span className="flex items-center gap-1.5 text-gray-500 text-sm">
              <MapPin size={13} />
              {item.location}
            </span>
            {item.gpa && (
              <span className="px-2 py-0.5 rounded-md bg-green-500/10 text-green-400 text-xs font-medium">
                GPA: {item.gpa}
              </span>
            )}
          </div>

          {item.description && (
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {item.description}
            </p>
          )}

          {item.courses && item.courses.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {item.courses.map(course => (
                  <span
                    key={course}
                    className="px-2 py-0.5 rounded-md bg-gray-800 text-gray-300 text-xs"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary font-semibold mb-2">My background</p>
        <h2 className="section-title">
          Education & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-subtitle mt-2">
          Academic background and professional certifications.
        </p>

        <div className="grid gap-6 mb-10">
          {education.map(item => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>

        {certifications.length > 0 && (
          <>
            <h3 className="text-xl font-bold mb-6">Certifications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map(cert => (
                <div key={cert.id} className="card flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap size={16} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{cert.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{cert.issuer}</p>
                    <p className="text-gray-600 text-xs mt-1">{cert.date}</p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-xs hover:underline mt-1 inline-block"
                      >
                        Verify →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
