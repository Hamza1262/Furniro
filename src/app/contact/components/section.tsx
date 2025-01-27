import React from 'react';
import logo from '@/images/logo.png'; 
import Image from 'next/image';
import Link from 'next/link';

// Contact Component
const Contact = () => {
  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center">
            <div className="text-amber-500 text-2xl mb-2">
                <Image src={logo} alt='logo' className='w-16 h-16'/>
            </div>
            <h1 className="text-2xl font-semibold mb-2">Contact</h1>
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-900">Contact</span>
            </div>
          </div>
        </div>
      </div>

    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Get in Touch With Us</h2>
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h3 className="font-medium mb-2">Address</h3>
                <p className="text-gray-600">Class9-12, Friday, Governer House.</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Phone</h3>
                <p className="text-gray-600">
                  Mobile: (+92) 3323365825-4565<br />
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Working Time</h3>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 - 07:00<br />
                  Saturday-Sunday: 9:00 - 05:00
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Your name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="ABC"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">Email address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="abc@def.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="This is optional"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Hi, I would like to..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export { Contact };