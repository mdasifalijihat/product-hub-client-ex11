export function HowItWorks() {
  const steps = [
    { id: 1, title: "Search Product", desc: "পণ্য বা প্রশ্ন সার্চ করুন।" },
    { id: 2, title: "Read Reviews", desc: "অনেক ব্যবহারকারীর রিভিউ পড়ুন।" },
    { id: 3, title: "Give Your Review", desc: "তোমার অভিজ্ঞতা শেয়ার করে অন্যদের সাহায্য করো।" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.id} className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-14 h-14 mx-auto bg-[rgb(255,98,84)] text-white rounded-full flex items-center justify-center font-bold mb-4">{s.id}</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}