import React from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Auction from '../../assets/images/Auction.png'

function AboutUs() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf] text-black py-16">
              <div className="container mx-auto text-center">
                  <h1 className="text-4xl font-bold">About Us</h1>
                  <p className="mt-4 text-lg">
                      Learn more about our journey, mission, and values.
                  </p>
              </div>
          </section>

          {/* Our Story Section */}
          <section className="py-16 px-6   flex justify-center">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
                      <p className="text-gray-600">
                          We started our journey with the aim of bringing innovation and
                          value to our customers. Over the years, our dedication and passion
                          have helped us grow into a trusted brand.
                      </p>
                      <p className="text-gray-600 mt-4">
                          Our team is committed to excellence, ensuring that every experience
                          with us leaves a lasting impression.
                      </p>
                  </div>
                  <div className="flex justify-center">
                  <img
                      src={Auction}
                      alt="Our Story"
                      className="rounded-lg shadow-lg  max-w-[300px] w-full h-full max-h-[300px]" />
                  </div>
              </div>
          </section>

          {/* Our Mission Section */}
          <section className="bg-gray-200 py-16 px-8">
              <div className="container mx-auto text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                      To create meaningful connections between products and customers,
                      ensuring exceptional quality and unparalleled service.
                  </p>
              </div>
          </section>

          {/* Our Values Section */}
          <section className="py-16 px-8">
              <div className="container mx-auto">
                  <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                      Our Values
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Value 1 */}
                      <div className="bg-white shadow-md rounded-lg p-6 text-center">
                          <h3 className="text-xl font-semibold text-blue-500 mb-2">
                              Integrity
                          </h3>
                          <p className="text-gray-600">
                              We believe in being honest and transparent in everything we do.
                          </p>
                      </div>

                      {/* Value 2 */}
                      <div className="bg-white shadow-md rounded-lg p-6 text-center">
                          <h3 className="text-xl font-semibold text-blue-500 mb-2">
                              Innovation
                          </h3>
                          <p className="text-gray-600">
                              Constantly striving to bring creative solutions to the table.
                          </p>
                      </div>

                      {/* Value 3 */}
                      <div className="bg-white shadow-md rounded-lg p-6 text-center">
                          <h3 className="text-xl font-semibold text-blue-500 mb-2">
                              Excellence
                          </h3>
                          <p className="text-gray-600">
                              Delivering quality products and services to our customers.
                          </p>
                      </div>
                  </div>
              </div>
          </section>

       
      </div><Footer /></>
  );
}

export default AboutUs;
