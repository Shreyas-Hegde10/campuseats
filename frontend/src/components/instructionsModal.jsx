import { X, Lightbulb, Settings, RotateCcw, Heart, HelpCircle } from "lucide-react";
import { useEffect } from "react";

function InstructionsModal({ closeModal }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all duration-300">
        <div className="max-h-[80vh] overflow-y-auto p-6 space-y-4">
          {/* Header */}
          <div className="relative mb-6">
            <button
              className="absolute right-0 top-0 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              onClick={closeModal}
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome to CampusEats!
              </h2>
              <p className="text-gray-600">Here's how to get started</p>
            </div>
          </div>

          {/* Instruction items */}
          <InstructionItem
            icon={<Settings className="w-5 h-5 text-blue-600" />}
            title="Set Your Preferences"
            desc={
              <>
                Tap the <span className="font-medium text-blue-600">Settings</span>{" "}
                button to set your budget and dietary preferences
              </>
            }
          />
          <InstructionItem
            icon={<RotateCcw className="w-5 h-5 text-blue-600" />}
            title="Reset Swipes"
            desc={
              <>
                Tap the <span className="font-medium text-blue-600">Reset</span>{" "}
                button to start swiping from the beginning
              </>
            }
          />
          <InstructionItem
            icon={
              <div className="flex space-x-1">
                <Heart className="w-4 h-4 text-green-500" />
                <X className="w-4 h-4 text-red-500" />
              </div>
            }
            title="Swipe to Choose"
            desc={
              <>
                Swipe <span className="font-medium text-green-600">right</span> to like or{" "}
                <span className="font-medium text-red-600">left</span> to pass on food items
              </>
            }
          />
          <InstructionItem
            icon={<HelpCircle className="w-5 h-5 text-blue-600" />}
            title="Need Help?"
            desc={
              <>
                Tap the <span className="font-medium text-blue-600">Help</span>{" "}
                button in the top-right corner to view these instructions again
              </>
            }
          />

          {/* Footer button */}
          <div className="mt-6">
            <button
              onClick={closeModal}
              className="
                w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white 
                py-4 px-6 rounded-xl font-semibold shadow-lg 
                hover:from-blue-600 hover:to-blue-700 
                transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]
              "
            >
              Got it, let's start!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub component for holding instruction items
const InstructionItem = ({ icon, title, desc }) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 border-blue-100 transition-all duration-200 hover:scale-[1.02]">
      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-blue-200">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default InstructionsModal;
