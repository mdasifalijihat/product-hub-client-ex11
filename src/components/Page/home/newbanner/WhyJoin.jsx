export function WhyJoin() {
  const points = [
    "রিয়েল ইউজার রিভিউ — বিজ্ঞাপিত নয়",
    "সময় ও টাকা বাঁচান — খারাপ পণ্য এড়ান",
    "কমিউনিটি-চালিত রেটিং ও রিকমেন্ডেশন",
    "সহজ সার্চ ও ফিল্টারিং",
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Why Join ProductQueryHub?</h2>
        <p className="text-sm text-gray-600 mb-6">একটি শক্তিশালী কারণ থাকলে লোকেরা তোমার সাইটে অ্যাকাউন্ট খুলবে — এগুলো সেটাই জানায়।</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {points.map((p, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgb(255,98,84)] text-white flex items-center justify-center font-bold">✓</div>
              <p className="text-sm text-gray-700">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}