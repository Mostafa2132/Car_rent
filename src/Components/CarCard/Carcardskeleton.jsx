"use client";

export default function CarCardSkeleton() {
  return (
    <div className="group relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/5 to-transparent rounded-bl-full" />

      {/* Image Container Skeleton */}
      <div className="relative h-64 overflow-hidden bg-slate-800/50">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />

        {/* Image placeholder with shimmer effect */}
        <div className="relative w-full h-full bg-slate-800 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-slate-700/30 to-transparent" />
        </div>

        {/* Model year badge skeleton */}
        <div className="absolute top-4 left-4 z-20">
          <div className="px-4 py-2 bg-slate-950/80 backdrop-blur-md border border-slate-700/50 rounded-full">
            <div className="h-4 w-16 bg-slate-700 rounded animate-pulse">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
            </div>
          </div>
        </div>

        {/* Favorite button skeleton */}
        <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-950/80 backdrop-blur-md border border-slate-700/50 rounded-full flex items-center justify-center">
          <div className="w-5 h-5 bg-slate-700 rounded animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title Skeleton */}
        <div>
          <div className="h-8 w-3/4 bg-slate-800 rounded-lg mb-2 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-slate-800 rounded relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_0.1s] bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
            </div>
            <div className="h-4 w-5/6 bg-slate-800 rounded relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_0.2s] bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Features Skeleton */}
        <div className="flex items-center space-x-4 pt-2">
          {/* Feature 1 */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
              <div className="w-4 h-4 bg-slate-700 rounded relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
              </div>
            </div>
            <div className="h-3 w-10 bg-slate-800 rounded relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
              <div className="w-4 h-4 bg-slate-700 rounded relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_0.1s] bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
              </div>
            </div>
            <div className="h-3 w-14 bg-slate-800 rounded relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_0.1s] bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 pt-4">
          <div className="flex items-center justify-between">
            {/* Price Skeleton */}
            <div>
              <div className="h-3 w-20 bg-slate-800 rounded mb-2 relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
              </div>
              <div className="h-9 w-24 bg-slate-800 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_0.2s] bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
              </div>
            </div>

            {/* Rent button skeleton */}
            <div className="px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl relative overflow-hidden">
              <div className="h-5 w-20 bg-slate-700 rounded relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}