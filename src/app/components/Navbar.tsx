const categories = [
  { name: "চাল", icon: "🍚" },
  { name: "ডাল", icon: "🫘" },
  { name: "তেল", icon: "🛢️" },
  { name: "সবজি", icon: "🥦" },
  { name: "মাছ", icon: "🐟" },
  { name: "মাংস", icon: "🍗" },
  { name: "ডিম-দুধ", icon: "🥛" },
  { name: "মসলা", icon: "🌶️" },
];

export default function Navbar() {
  return (
    <header className="bg-white">
      <div className="border-b border-gray-100">
        <div className="mx-auto flex h-[60px] max-w-[1050px] items-center justify-between px-4">
          
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600">
              <img src="/logo-icon.png" alt="Bazar Dor logo" className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-none text-gray-900">
                বাজার দর
              </h1>
              <p className="mt-1 text-[10px] text-gray-500">
                সোমবার, ৬ অক্টোবর, ২০২৬
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
              👤
            </div>
            <span className="text-sm font-medium text-gray-800">
              Fahiya
            </span>
            <span className="text-xs text-gray-500">
              ▾
            </span>
          </div>
        </div>
      </div>
      <nav className="border-b border-gray-100">
        <div className="mx-auto flex max-w-[1050px] items-center gap-7 overflow-x-auto px-4 py-3">
          {categories.map((category) => (
            <a  key={category.name} href="#" className="flex shrink-0 items-center gap-1.5 text-sm text-gray-800 transition hover:text-green-600">
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}