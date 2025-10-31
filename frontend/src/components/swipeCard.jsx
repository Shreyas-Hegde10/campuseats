import React from "react";
import { MapPin } from "lucide-react";

export default function SwipeCard({ item }) {
  return (
    <div
      className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-300 ease-out hover:scale-[1.02]">
      <div className="h-50 relative bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
          <span className="text-2xl font-bold text-gray-900">${item.price}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1 text-gray-500" />
          <span className="font-medium">{item.diningHall}</span> 
          <span className="mx-2">•</span> 
          <p className="font-medium">{item.distance} km away</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium capitalize">
            {item.category}
          </span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium capitalize">{item.calories} calories</span>
        </div>

        <div className="mb-4">
            <p className="text-sm text-gray mb-2">Dietary Tags</p>
            <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm :font-medium">Dairy</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Gluten</span>
            </div> 

            <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    Vegetarian
                </span>
            </div> 

            <div className="text-center mt-6 border-t pt-4 border-gray-200">
                <p className="text-gray-500 text-sm">
                            Swipe right to like • Swipe left to pass
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}