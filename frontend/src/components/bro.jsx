import React from "react";

export default function SwipeCard({ item }) {
  return (
    <div
      className="absolute w-full bg-whiterounded-3xl shadow-2xl
        overflow-hidden
        transform
        transition-transform
        duration-300
        ease-out
        hover:scale-[1.02]
      "
    >
      {/* Image section (placeholder background for now) */}
      <div className="h-64 relative bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
          <span className="text-2xl font-bold text-gray-900">${item.price}</span>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>

        <div className="flex items-center text-gray-600 mb-4">
          <span className="font-medium">{item.diningHall}</span>
          <span className="mx-2">•</span>
          <span>{item.distance} miles away</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium capitalize">
            {item.category}
          </span>
          <span className="text-sm text-gray-500">{item.calories} calories</span>
        </div>
      </div>
    </div>
  );
}