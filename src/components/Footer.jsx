import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>
          © {year} {personal.name}. All rights reserved.
        </p>
        <p>
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
