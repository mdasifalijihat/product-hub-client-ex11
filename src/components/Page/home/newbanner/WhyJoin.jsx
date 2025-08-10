export function WhyJoin() {
  const points = [
    "Real user reviews — not sponsored",
    "Save time and money — avoid bad products",
    "Community-driven ratings and recommendations",
    "Easy search and filtering",
    "Trusted by a growing community of users",
    "Stay updated with the latest product trends",
  ];

  return (
    <section className="py-12">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Why Join ProductQueryHub?</h2>
        <p className="text-sm text-gray-600 mb-6">
          When people have a strong reason, they create an account on your site — these points give them that reason.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[rgb(255,98,84)] text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <p className="text-sm text-gray-700">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
