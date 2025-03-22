import React from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

function Conditions() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf] text-black py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Conditions</h1>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="py-16 px-6 container mx-auto">
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. General Conditions</h2>
            <p className="text-gray-600 mb-4">
              Eligibility: By using our products or services, you confirm that you are at least 18 years old or have the legal authority to enter into binding agreements.
            </p>
            <p className="text-gray-600 mb-4">
              Agreement: These Terms govern your relationship with us. If you do not agree, please refrain from using our services.
            </p>
            <p className="text-gray-600 mb-4">
              Modifications: We may update or change these Terms at any time. Continued use of our services after updates constitutes acceptance.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">2. Products and Services</h2>
            <p className="text-gray-600 mb-4">
              We offer agricultural supplies, farm equipment, consulting, and livestock products. Misuse of products, such as improper handling of chemicals, may lead to health hazards or damage.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">3. Orders and Payment</h2>
            <p className="text-gray-600 mb-4">
              Orders must be paid in full at the time of purchase unless otherwise agreed. Prices are subject to change due to supply fluctuations.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">4. Delivery and Shipping Conditions</h2>
            <p className="text-gray-600 mb-4">
              We offer several shipping options, but delays may occur due to weather, strikes, or third-party carriers. If your order is damaged, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">5. Returns, Refunds, and Cancellations</h2>
            <p className="text-gray-600 mb-4">
              Returns are only accepted for defective or damaged products within [X] days. Refunds will be processed after confirmation of return.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">6. Liability and Indemnity</h2>
            <p className="text-gray-600 mb-4">
              We are not liable for any indirect damages arising from the use of our products or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">7. Privacy and Data Protection</h2>
            <p className="text-gray-600 mb-4">
              Your use of our services is governed by our Privacy Policy, outlining how we collect and protect your data.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">8. Force Majeure</h2>
            <p className="text-gray-600 mb-4">
              We are not liable for delays or failures due to unforeseen circumstances beyond our control, such as natural disasters or governmental actions.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">9. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-600 mb-4">
              These Terms and Conditions shall be governed by the laws of [Your Country/State]. Disputes shall be resolved through mediation or arbitration before litigation.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Conditions;
