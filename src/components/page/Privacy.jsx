import React from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf] text-black py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="py-16 px-6 container mx-auto">
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect various types of information to provide and improve our services. The data we collect may include personal information, agricultural data, transaction data, device usage data, location data, and third-party data.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">2. How We Use Your Information</h2>
            <p className="text-gray-600">
              We use collected data for service provision, customer communication, service improvement, customization, legal compliance, and marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">3. Sharing Your Information</h2>
            <p className="text-gray-600">
              We do not sell your data but may share it with service providers, legal entities, or during business transfers with your consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">4. Data Security</h2>
            <p className="text-gray-600">
              We take necessary steps to protect your data, but no method is 100% secure. Users should also take precautions to protect their information.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">5. Your Rights</h2>
            <p className="text-gray-600">
              Depending on local laws, you may request access, correction, deletion, opt-out, or data portability. Contact us to exercise these rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">6. Cookies and Tracking</h2>
            <p className="text-gray-600">
              We use cookies to enhance user experience. You can manage cookies through browser settings, but disabling them may limit functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">7. International Data Transfers</h2>
            <p className="text-gray-600">
              Your data may be transferred internationally. By using our services, you consent to these transfers.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-6">8. Children's Privacy</h2>
            <p className="text-gray-600">
              Our services are not intended for children under 13. We do not knowingly collect data from children.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
