import { Utensils } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur border-b border-gray-200 top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center py-4">
          <div className="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl text-gray-900 font-bold">CampusEats</h1>
              <p className="text-xs text-gray-500">Swipe to find food!</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
