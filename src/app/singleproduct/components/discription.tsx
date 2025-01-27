"use client"

import React from 'react';
import { useState } from 'react';
import sofa1 from './../../../images/sofa1.png';
import Image from 'next/image';


const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState('description');
  
  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional Information' },
    { id: 'reviews', label: 'Reviews [5]' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`mr-8 py-4 text-sm md:text-base font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'text-black border-b-2 border-black'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Description Content */}
      {activeTab === 'description' && (
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Embodying the raw, wayward spirit of rock {'n'} roll, the Kilburn portable 
            active stereo speaker takes the unmistakable look and sound of Marshall, 
            unplugs the chords, and takes the show on the road.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage 
            styled engineering. Setting the bar as one of the loudest speakers in its 
            class, the Kilburn is a compact, stout-hearted hero with a well-balanced 
            audio which boasts a clear midrange and extended highs for a sound that 
            is both articulate and pronounced. The analogue knobs allow you to fine 
            tune the controls to your personal preferences while the guitar-influenced 
            leather strap enables easy and stylish travel.
          </p>

          {/* Product Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#FAF9F8] p-8 rounded-lg">
              <Image 
                src={sofa1}
                alt='sofa'
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="bg-[#FAF9F8] p-8 rounded-lg">
              <Image 
                src={sofa1}
                alt='sofa'
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Additional Information Tab Content */}
      {activeTab === 'additional' && (
        <div className="text-gray-600">
          <p>Additional product information would go here.</p>
        </div>
      )}

      {/* Reviews Tab Content */}
      {activeTab === 'reviews' && (
        <div className="text-gray-600">
          <p>Product reviews would go here.</p>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;