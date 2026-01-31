"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-md w-full">
        {/* Loading Card */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-12 shadow-2xl">
          
          {/* Animated Logo/Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 w-24 h-24 border-4 border-amber-500/20 rounded-full animate-spin" 
                   style={{ animationDuration: '3s' }} />
              
              {/* Middle rotating ring */}
              <div className="absolute inset-2 w-20 h-20 border-4 border-amber-500/40 border-t-amber-500 rounded-full animate-spin" 
                   style={{ animationDuration: '1.5s' }} />
              
              {/* Inner pulsing circle */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl animate-pulse" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 animate-pulse">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-3">
              Loading
              <span className="inline-flex ml-1">
                <span className="animate-bounce" style={{ animationDelay: '0s' }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
              </span>
            </h2>
            <p className="text-slate-400 text-sm">
              Please wait while we prepare your experience
            </p>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 animate-shimmer" />
            <div className="absolute inset-0">
              <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full animate-pulse" 
                   style={{ width: '60%' }} />
            </div>
          </div>

          {/* Loading Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping" />
              </div>
              <p className="text-slate-500 text-xs">Connecting</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping" 
                     style={{ animationDelay: '0.3s' }} />
              </div>
              <p className="text-slate-500 text-xs">Loading</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-500/50 rounded-full animate-pulse" />
              </div>
              <p className="text-slate-500 text-xs">Ready</p>
            </div>
          </div>

        </div>

        {/* Bottom hint */}
        <div className="text-center mt-6">
          <p className="text-slate-500 text-xs animate-pulse">
            This won't take long...
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}