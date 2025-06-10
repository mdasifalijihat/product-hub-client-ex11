import React, { useEffect, useState } from "react";

const AnimatedStat = ({ label, value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="text-center">
      <p className="text-5xl font-extrabold text-white">{count.toLocaleString()}</p>
      <p className="mt-2 text-lg font-medium text-white">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { label: "Total Queries", value: 3241 },
    { label: "Active Users", value: 1843 },
    { label: "Recommendations", value: 5672 },
    { label: "Countries Served", value: 35 },
  ];

  return (
    <section className=" px-6 py-16 bg-[rgb(255,98,84)] rounded-lg shadow-lg my-12 ">
      <h2 className="text-4xl font-bold mb-10 text-center text-white">Our Impact In Numbers</h2>
      <div className="grid gap-10  sm:grid-cols-2 md:grid-cols-4">
        {stats.map(({ label, value }, idx) => (
          <AnimatedStat key={idx} label={label} value={value} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;


