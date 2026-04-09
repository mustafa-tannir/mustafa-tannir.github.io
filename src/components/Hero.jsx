import { Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react'
import { personal } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {personal.availableForWork && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </div>
        )}

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-4">
          Hi, I'm{' '}
          <span className="gradient-text">{personal.name}</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6">
          {personal.title}
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
          {personal.tagline}
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            View My Work
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          {personal.linkedin && (
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={22} />
            </a>
          )}
          {personal.twitter && (
            <a href={personal.twitter} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors">
              <Twitter size={22} />
            </a>
          )}
          <a href={`mailto:${personal.email}`}
            className="text-gray-500 hover:text-white transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-400 transition-colors animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
