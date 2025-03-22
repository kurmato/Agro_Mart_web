import React from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

function ShippingPolicy() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <section className="bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf] text-black py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Shipping</h1>
          </div>
        </section>

        <section className="py-16 px-6 container mx-auto">
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Shipping Methods for Farming Products</h2>
            <p className="text-gray-600 mb-4">
              We offer a variety of shipping options to ensure that your products arrive when you need them:
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Standard Shipping: Non-urgent, cost-effective delivery.</li>
              <li>Expedited Shipping: Faster delivery within [X] business days.</li>
              <li>Heavy Machinery & Equipment: Freight shipping for large equipment.</li>
              <li>Local Delivery: Convenient delivery for nearby customers.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">2. Shipping Cost Breakdown</h2>
            <p className="text-gray-600">
              Costs depend on weight, method, and location. Free shipping for orders over [X Amount].
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">3. Delivery Timeframes</h2>
            <p className="text-gray-600">
              Estimated delivery times:
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Standard: [X-Y] business days.</li>
              <li>Expedited: [X] business days.</li>
              <li>Heavy Equipment: [X-Y] weeks.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">4. Shipping Restrictions for Agricultural Products</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Live Plants & Seeds: May have regional restrictions.</li>
              <li>Chemicals & Pesticides: Subject to shipping limitations.</li>
              <li>Large Equipment: Requires special shipping arrangements.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">5. Order Processing Time</h2>
            <p className="text-gray-600">Orders are processed Monday-Friday. Processing time varies by product.</p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">6. Packaging</h2>
            <p className="text-gray-600">Secure, eco-friendly packaging ensures safe delivery.</p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">7. International Shipping</h2>
            <p className="text-gray-600">Additional customs fees and longer delivery times may apply.</p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">8. Returns, Damages & Lost Shipments</h2>
            <p className="text-gray-600">
              Contact us within [X] days for damaged or lost items. Returns accepted within [X] days for eligible products.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">9. Local Pickup</h2>
            <p className="text-gray-600">Customers near our warehouse can pick up their orders in person.</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ShippingPolicy;
