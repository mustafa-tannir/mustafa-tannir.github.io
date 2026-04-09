import { skills } from '../data/portfolio'

const categories = [
  { label: 'Languages', key: 'languages' },
  { label: 'Frameworks & Libraries', key: 'frameworks' },
  { label: 'Tools & Platforms', key: 'tools' },
  { label: 'Databases', key: 'databases' },
  { label: 'Other', key: 'other' },
]

function Badge({ label }) {
  return (
    <span className="px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 hover:border-primary/50 hover:bg-primary/5 text-gray-300 text-sm font-medium transition-all cursor-default">
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary font-semibold mb-2">What I work with</p>
        <h2 className="section-title">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="section-subtitle mt-2">
          Technologies and tools I use to bring ideas to life.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => {
            const items = skills[cat.key]
            if (!items || items.length === 0) return null
            return (
              <div key={cat.key} className="card">
                <h3 className="text-gray-300 font-semibold mb-4 text-sm uppercase tracking-widest">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <Badge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
