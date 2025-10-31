import Navbar from "./components/Navbar";
import InstructionsModal from "./components/instructionsModal"; 
import ProgressBar from "./components/progressBar";
import { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar onShowModal={() => setShowModal(true)} />
      {showModal ? (
        <InstructionsModal closeModal={() => setShowModal(false)} />
      ) : null}
        <ProgressBar totalItems={10} />
    </div>
  );
}
export default App;
