<div class="max-w-sm mx-auto mb-8">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h1 class="text-3xl font-bold text-gray-900">CampusEats</h1>
                    <p class="text-gray-600" id="progress-text">1 of 6 items</p>
                </div>
                <div class="flex space-x-2">
                    <button class="p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105" onclick="showPreferences()">
                        <i data-lucide="settings" class="w-5 h-5 text-gray-600"></i>
                    </button>
                    <button class="p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105" onclick="resetSwipes()">
                        <i data-lucide="rotate-ccw" class="w-5 h-5 text-gray-600"></i>
                    </button>
                </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full transition-all duration-500" id="progress-bar" style="width: 16.66%"></div>
            </div>
        </div>