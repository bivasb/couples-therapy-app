export default function CTASection() {
  return (
    <section className="bg-purple-700 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Help is right at your fingertips
          </h2>
          <div className="w-48 h-32 mx-auto mb-6 flex items-center justify-center">
            <svg viewBox="0 0 240 160" className="w-full h-full">
              {/* Left hand/phone */}
              <g transform="translate(20, 20)">
                <rect x="10" y="20" width="70" height="100" fill="#E5E7EB" rx="8" stroke="#9CA3AF" strokeWidth="2"/>
                <rect x="20" y="30" width="50" height="70" fill="#F3F4F6" rx="4"/>
                <circle cx="45" cy="110" r="5" fill="#9CA3AF"/>
              </g>
              
              {/* Right hand/phone */}
              <g transform="translate(140, 20)">
                <rect x="10" y="20" width="70" height="100" fill="#E5E7EB" rx="8" stroke="#9CA3AF" strokeWidth="2"/>
                <rect x="20" y="30" width="50" height="70" fill="#F3F4F6" rx="4"/>
                <circle cx="45" cy="110" r="5" fill="#9CA3AF"/>
              </g>
              
              {/* Connection line */}
              <path d="M 90 70 Q 120 50 150 70" stroke="#8B5CF6" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
              
              {/* Hearts */}
              <path d="M 115 45 C 115 42, 112 40, 110 40 C 108 40, 106 41, 105 43 C 104 41, 102 40, 100 40 C 98 40, 95 42, 95 45 C 95 50, 105 58, 105 58 S 115 50, 115 45 Z" fill="#EC4899"/>
              <path d="M 135 55 C 135 52, 132 50, 130 50 C 128 50, 126 51, 125 53 C 124 51, 122 50, 120 50 C 118 50, 115 52, 115 55 C 115 60, 125 68, 125 68 S 135 60, 135 55 Z" fill="#EC4899"/>
            </svg>
          </div>
          <p className="text-gray-600 mb-8 text-lg">
            Get the support you need from one of our therapists
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}