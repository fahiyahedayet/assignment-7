export default function Hero() {
    return (
        <section className="bg-green-50">
            <div className="mx-auto flex max-w-[1050px] flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20">
                <div className="flex-1 text-center md:text-left">
                    <p className="mb-4 text-sm font-bold uppercase tracking-wider text-green-600">
                        আপনার প্রতিদিনের বাজারদর
                    </p>
                    <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                        বাজারের সঠিক দাম, <br /> এক নজরেই জানুন।
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
                        চাল, ডাল, তেল, মাছ, মাংসসহ প্রয়োজনীয় পণ্যের সর্বশেষ বাজারদর সহজেই দেখুন।
                    </p>
                    <a href="#সব-পণ্য"  className="mt-7 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                    >সব পণ্যের দাম দেখুন → </a>
                </div>
                <div className="flex flex-1 justify-center">
                    <div className="flex h-64 w-full max-w-md items-center justify-center rounded-3xl bg-green-100 text-8xl md:h-80">
                        🛒
                    </div>
                </div>

            </div>
        </section>
    );
}