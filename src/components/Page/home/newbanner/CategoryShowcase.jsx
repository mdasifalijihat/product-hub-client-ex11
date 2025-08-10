export function CategoryShowcase() {
  const categories = [
    { id: "electronics", label: "Electronics" },
    { id: "home-appliances", label: "Home Appliances" },
    { id: "fashion", label: "Fashion" },
    { id: "beauty", label: "Beauty" },
    { id: "sports", label: "Sports" },
    { id: "automotive", label: "Automotive" },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <p className="text-sm text-gray-600 mb-6">ক্যাটাগরির মাধ্যমে সহজে পণ্য ব্রাউজ করুন। বিস্তারিত দেখতে লগইন করুন।</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/queries?category=${c.id}`}
              className="block bg-white text-center p-4 rounded-lg shadow hover:shadow-md transition"
              aria-label={c.label}
            >
              <div className="h-12 flex items-center justify-center mb-2 bg-gray-100 rounded-full">
                <span className="text-lg font-semibold text-gray-700">{c.label.charAt(0)}</span>
              </div>
              <div className="text-sm font-medium">{c.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}