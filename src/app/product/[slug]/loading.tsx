
export default function ProductDetailsLoading() {
  return (
    <main className="min-h-screen bg-[#f5f8f5] px-4 py-10">
      <div className="mx-auto max-w-[1050px]">
        <div className="h-4 w-48 animate-pulse rounded bg-gray-200" />
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 animate-pulse rounded-2xl bg-gray-200" />
            <div className="flex-1">
              <div className="h-7 w-48 animate-pulse rounded bg-gray-200" />
              <div className="mt-3 h-4 w-32 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}  className="h-24 animate-pulse rounded-xl bg-gray-100"
              />
            ))}
          </div>
        </div>

        <div className="mt-8 h-64 animate-pulse rounded-2xl bg-gray-200" />
      </div>
    </main>
  );
}