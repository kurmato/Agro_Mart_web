import React from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf] text-black py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Terms & Conditions</h1>
          </div>
        </section>

        {/* Terms and Conditions Section */}
        <section className="py-16 px-6 container mx-auto">
          <div className="bg-white p-8 shadow-md rounded-lg">
            {terms.map((term, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{term.title}</h2>
                <p className="text-gray-600 mt-2">{term.content}</p>
                {term.list && (
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {term.list.map((item, i) => (
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

const terms = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing, browsing, or using our Services, you agree to be bound by these Terms. If you do not agree, discontinue use immediately.",
  },
  {
    title: "2. Services Provided",
    content: "We offer a range of farming-related services, including:",
    list: [
      "Agricultural products (e.g., seeds, fertilizers, equipment).",
      "Farm consultation and advice.",
      "Custom farming solutions and services.",
      "Online sales and delivery of farming goods.",
      "Data collection and analysis for agricultural purposes.",
    ],
  },
  {
    title: "3. Eligibility",
    content:
      "To use our Services, you must be at least 18 years old or the legal age of majority in your jurisdiction.",
  },
  {
    title: "4. Registration and Account Information",
    content:
      "Certain Services may require account creation. You are responsible for maintaining the confidentiality of your account.",
  },
  {
    title: "5. Orders and Payments",
    content:
      "By placing an order, you are offering to purchase under the specified terms. All orders are subject to availability.",
  },
  {
    title: "6. Returns, Refunds, and Cancellations",
    content:
      "Our return and refund policy is available on our website. Please review the terms before making a purchase.",
  },
  {
    title: "7. Intellectual Property",
    content:
      "All content, logos, trademarks, and other intellectual property are owned or licensed by us and protected by copyright laws.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "We are not liable for indirect, special, incidental, or consequential damages arising from service use.",
  },
  {
    title: "9. Privacy",
    content:
      "Your use of our Services is governed by our Privacy Policy, outlining how we collect, use, and protect your data.",
  },
  {
    title: "10. Governing Law and Dispute Resolution",
    content:
      "These Terms will be governed by the laws of [your country or state]. Disputes will be resolved through arbitration or mediation before litigation.",
  },
];

export default TermsAndConditions;