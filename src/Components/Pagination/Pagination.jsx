"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

export default function Pagination({ info }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = info?.totalPages || 1;

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const goToPage = (pageNumber) => {
    // احتفظ بكل الـ filters الموجودة في الـ URL
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    
    // استخدم scroll: false عشان نتحكم في الـ scroll بنفسنا
    router.push(`?${params.toString()}`, { scroll: false });
    
    // scroll smooth للـ grid بعد وقت قصير
    setTimeout(() => {
      document
        .getElementById("main_grid")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); 
  };

  if (totalPages <= 1) return null;

  // Helper to generate page buttons with dots
  const getPages = () => {
    const pages = [];

    if (totalPages <= 5) {
      // لو عدد الصفحات صغير
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // أول صفحة
      pages.push(1);
      
      if (currentPage > 3) pages.push("dots-prev");

      // الصفحات اللي حوالين الصفحة الحالية
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) { // تجنب التكرار
          pages.push(i);
        }
      }

      // لو في صفحات بعد
      if (currentPage < totalPages - 2) pages.push("dots-next");

      // آخر صفحة
      if (totalPages > 1) pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {/* Previous */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={!hasPrev}
          className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
            hasPrev
              ? "bg-slate-900/80 backdrop-blur-xl hover:bg-slate-800/80 text-white border border-slate-700/50 hover:border-amber-500/50"
              : "bg-slate-900/50 text-slate-600 border border-slate-800/50 cursor-not-allowed opacity-50"
          }`}
        >
          <TbPlayerTrackNextFilled className="size-4 rotate-180" />
        </button>

        {/* Page Numbers */}
        {getPages().map((page, idx) =>
          page === "dots-prev" || page === "dots-next" ? (
            <span key={`dots-${idx}`} className="px-2 text-slate-400 text-lg font-bold">
              …
            </span>
          ) : (
            <button
              key={`page-${page}`}
              onClick={() => goToPage(page)}
              className={`min-w-[40px] h-10 rounded-xl font-bold text-sm transition-all ${
                page === currentPage
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/30 scale-105"
                  : "bg-slate-900/80 backdrop-blur-xl hover:bg-slate-800/80 text-white border border-slate-700/50 hover:border-amber-500/50 hover:scale-105"
              }`}
            >
              {page}
            </button>
          ),
        )}

        {/* Next */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={!hasNext}
          className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
            hasNext
              ? "bg-slate-900/80 backdrop-blur-xl hover:bg-slate-800/80 text-white border border-slate-700/50 hover:border-amber-500/50"
              : "bg-slate-900/50 text-slate-600 border border-slate-800/50 cursor-not-allowed opacity-50"
          }`}
        >
          <TbPlayerTrackNextFilled className="size-4" />
        </button>
      </div>

      {/* Page Info */}
      <div className="text-center mt-6">
        <p className="text-slate-400 text-sm">
          Page{" "}
          <span className="text-amber-400 font-bold">{currentPage}</span> of{" "}
          <span className="text-white font-bold">{totalPages}</span>
        </p>
      </div>
    </div>
  );
}