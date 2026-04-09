import { useState } from 'react'
import { Mail, Linkedin, Twitter, Send } from 'lucide-react'
import { personal } from '../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens default mail client with pre-filled message
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
  }

  const socials = [
    { label: 'LinkedIn', href: personal.linkedin, icon: Linkedin, show: !!personal.linkedin },
    { label: 'Twitter', href: personal.twitter, icon: Twitter, show: !!personal.twitter },
  ].filter(s => s.show)

  return (
    <section id="contact" className="py-24 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary font-semibold mb-2">Get in touch</p>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-subtitle mt-2">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm currently open to new opportunities. Whether you have a question, a project idea,
              or just want to connect — my inbox is always open.
            </p>

            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors mb-6 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={18} className="text-primary" />
              </div>
              <span className="font-medium">{personal.email}</span>
            </a>

            {socials.length > 0 && (
              <div className="flex items-center gap-3 mt-8">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-primary/10 border border-gray-700 hover:border-primary/50 flex items-center justify-center text-gray-400 hover:text-primary transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 focus:border-primary focus:outline-none text-sm text-gray-100 placeholder-gray-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 focus:border-primary focus:outline-none text-sm text-gray-100 placeholder-gray-600 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 focus:border-primary focus:outline-none text-sm text-gray-100 placeholder-gray-600 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Send size={15} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
