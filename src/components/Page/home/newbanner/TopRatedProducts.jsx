export function TopRatedProducts() {
  const [top, setTop] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_URL}/queries`);
        let data = await res.json();
        // sort by recommendationCount desc and take top 6
        data = data
          .map((d) => ({ ...d, recommendationCount: d.recommendationCount || 0 }))
          .sort((a, b) => b.recommendationCount - a.recommendationCount)
          .slice(0, 6);
        setTop(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Top Rated / Most Recommended</h2>
        <p className="text-sm text-gray-600 mb-6">উচ্চতর সাজেশনগুলো (শুধু পড়া যাবে — রেটিং/রিভিউ দেওয়ার জন্য লগইন করুন)।</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            <Spinner />
          ) : (
            top.map((p) => (
              <div key={p._id} className="bg-white rounded-lg shadow p-4">
                <h3 className="font-medium mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 h-16 overflow-hidden">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[rgb(255,98,84)]">{p.recommendationCount || 0} recommendations</span>
                  <Link to={`/queries/${p._id}`} className="text-sm hover:underline">Read reviews</Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}