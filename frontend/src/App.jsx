import Navbar from "./components/Navbar";
import InstructionsModal from "./components/instructionsModal"; 
import ProgressBar from "./components/progressBar"; 
import { useState, useEffect } from "react";
import SwipeCard from "./components/swipeCard";

function App() { 
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 500);
    return () => clearTimeout(timer);
  }, []); 

  const mockFood = [
  { name: "Cheese Pizza Slice", price: 2.75, diningHall: "Student Union Cafe", distance: 0.3, category: "Vegetarian", calories: 280},
  { name: "Veggie Burger", price: 4.50, diningHall: "Main Dining Hall", distance: 0.2, category: "Lunch", calories: 420 },
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar onShowModal={() => setShowModal(true)} />
      {showModal ? (
        <InstructionsModal closeModal={() => setShowModal(false)} />
      ) : null}
      <ProgressBar totalItems={mockFood.length} />
      <div className="relative max-w-sm mx-auto h-[600px] flex items-center justify-center">
        <SwipeCard item={mockFood[0]} />
      </div>
    </div>
  );
}
export default App;
