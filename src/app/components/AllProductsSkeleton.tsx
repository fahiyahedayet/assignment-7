export default function AllProductsSkeleton() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1050px] px-4 py-14">
                <div className="mb-6">
                    <div className="h-7 w-32 animate-pulse rounded bg-gray-200" />
                    <div className="mt-2 h-4 w-72 animate-pulse rounded bg-gray-200" />
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="rounded-2xl border border-gray-200 bg-white p-4" >
                            <div className="flex items-center gap-3">
                                <div className="h-11 w-11 animate-pulse rounded-xl bg-gray-100" />
                                <div className="flex-1">
                                    <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                                    <div className="mt-2 h-3 w-16 animate-pulse rounded bg-gray-200" />
                                </div>
                            </div>
                            <div className="mt-5 flex items-end justify-between">
                                <div>
                                    <div className="h-3 w-16 animate-pulse rounded bg-gray-200 " />
                                    <div className="mt-2 h-6 w-24 animate-pulse rounded bg-gray-200" />
                                </div>
                                <div className=" h-6 w-14 animate-pulse rounded-full bg-gray-100" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}