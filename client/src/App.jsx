import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Animated Gear/Cog Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <svg 
              className="w-32 h-32 text-purple-400 animate-spin-slow"
              style={{ animationDuration: '3s' }}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" 
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-pulse">
          Coming Soon
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-purple-200 mb-8 animate-fade-in">
          We're working hard to bring you something amazing!
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto">
          <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full animate-progress"></div>
          </div>
          <p className="text-purple-300 mt-4 text-sm">Building something special...</p>
        </div>

        {/* Footer Text */}
        <div className="mt-16 text-purple-300 text-sm">
          <p>Stay tuned for updates</p>
        </div>
      </div>
    </div>
  )
}

export default App

