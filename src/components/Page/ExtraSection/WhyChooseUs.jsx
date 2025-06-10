import { FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt size={40} className="text-indigo-600" />,
      title: "Trusted & Secure",
      description: "We ensure data privacy and security with top-notch protocols.",
    },
    {
      icon: <FaRocket size={40} className="text-indigo-600" />,
      title: "Fast & Efficient",
      description: "Lightning fast response and seamless user experience guaranteed.",
    },
    {
      icon: <FaUsers size={40} className="text-indigo-600" />,
      title: "Community Driven",
      description: "Built by users for users. Your voice matters in our platform.",
    },
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-r from-indigo-50 to-white rounded-lg shadow-lg my-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-indigo-900">Why Choose Us?</h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
        {features.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-3 transition duration-300 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="mb-5">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
