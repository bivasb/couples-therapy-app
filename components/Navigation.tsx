import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-gray-100 text-gray-800 px-4 md:px-8 lg:px-16 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <div className="bg-cyan-400 w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">@</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/advice" className="text-gray-700 hover:text-cyan-500 transition-colors">
              Advice
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-cyan-500 transition-colors">
              FAQ
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-cyan-500 transition-colors">
              Reviews
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-cyan-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-gray-700 hover:text-cyan-500 transition-colors">
            Login
          </Link>
          <Link 
            href="/get-started" 
            className="bg-cyan-400 text-white px-5 py-2 rounded hover:bg-cyan-500 transition-colors font-medium"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  )
}