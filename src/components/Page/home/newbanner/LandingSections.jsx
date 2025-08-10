import { CategoryShowcase } from "./CategoryShowcase";
import { HowItWorks } from "./HowItWorks";
import { PopularPublicQueries } from "./PopularPublicQueries";
import { TopRatedProducts } from "./TopRatedProducts";
import { WhyJoin } from "./WhyJoin";

export default function LandingSections() {
  return (
    <main>
      <section className="bg-[rgb(255,98,84)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">ProductQueryHub</h1>
          <p className="mt-3 max-w-2xl">পণ্য কেনার আগে সঠিক সিদ্ধান্ত নিন — রিয়েল রিভিউ ও রিকমেন্ডেশন দেখে।</p>
        </div>
      </section>

      <PopularPublicQueries />
      <TopRatedProducts />
      <CategoryShowcase />
      <HowItWorks />
      <WhyJoin />
    </main>
  );
}