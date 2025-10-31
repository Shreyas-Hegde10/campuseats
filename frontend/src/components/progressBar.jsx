import React, { useState } from 'react';
import {Settings, RotateCcw} from 'lucide-react'

function ProgressBar({ totalItems }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const progress = ((currentIndex + 1) / totalItems) * 100;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1 < totalItems ? prev + 1 : prev));
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">CampusEats</h1>
          <p className="text-gray-600">{currentIndex + 1} of {totalItems} items</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer">
            <Settings className="w-5 h-5 text-blue-600" />
          </button>
          <button className="p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer" onClick={() => setCurrentIndex(0)}>
            <RotateCcw className="w-5 h-5 text-blue-600" />
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-blue-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>
      <button className="mt-2 text-blue-600 underline text-sm" onClick={next}>
        Next (mock)
      </button>
    </div>
  );
}

export default ProgressBar;