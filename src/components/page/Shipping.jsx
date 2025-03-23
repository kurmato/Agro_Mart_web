import React from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

function ShippingPolicy() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf] text-black py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Shipping Policy</h1>
          </div>
        </section>

        {/* Shipping Policy Section */}
        <section className="py-16 px-6 container mx-auto">
          <div className="bg-white p-8 shadow-md rounded-lg">
            {shippingPolicies.map((policy, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{policy.title}</h2>
                <p className="text-gray-600 mt-2">{policy.content}</p>
                {policy.list && (
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {policy.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

const shippingPolicies = [
  {
    title: "1. Shipping Methods for Farming Products",
    content: "We offer a variety of shipping options to ensure that your products arrive when you need them:",
    list: [
      "Standard Shipping: Non-urgent, cost-effective delivery.",
      "Expedited Shipping: Faster delivery within 5-7 business days.",
      "Heavy Machinery & Equipment: Freight shipping for large equipment.",
      "Local Delivery: Convenient delivery for nearby customers.",
    ],
  },
  {
    title: "2. Shipping Cost Breakdown",
    content: "Costs depend on weight, method, and location. Free shipping for orders over [X Amount].",
  },
  {
    title: "3. Delivery Timeframes",
    content: "Estimated delivery times:",
    list: [
      "Standard: 7 business days.",
      "Expedited: 4 business days.",
      "Heavy Equipment: 2-3 weeks.",
    ],
  },
  {
    title: "4. Shipping Restrictions for Agricultural Products",
    content: "",
    list: [
      "Live Plants & Seeds: May have regional restrictions.",
      "Chemicals & Pesticides: Subject to shipping limitations.",
      "Large Equipment: Requires special shipping arrangements.",
    ],
  },
  {
    title: "5. Order Processing Time",
    content: "Orders are processed Monday-Friday. Processing time varies by product.",
  },
  {
    title: "6. Packaging",
    content: "Secure, eco-friendly packaging ensures safe delivery.",
  },
  {
    title: "7. International Shipping",
    content: "Additional customs fees and longer delivery times may apply.",
  },
  {
    title: "8. Returns, Damages & Lost Shipments",
    content: "Contact us within 5 days for damaged or lost items. Returns accepted within 5 days for eligible products.",
  },
  {
    title: "9. Local Pickup",
    content: "Customers near our warehouse can pick up their orders in person.",
  },
];

export default ShippingPolicy;
