import React from 'react';

function GamingWorlds() {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-pink-200 to-violet-400">
       <section
  id="menu"
  className="py-16 bg-gradient-to-r from-black via-blue-900 to-blue-700 text-center"
>
        <h2 className="text-5xl font-extrabold mb-6">Welcome to the Gaming Universe</h2>
        <p className="text-lg mb-8">
          Explore diverse gaming worlds, each filled with unique adventures and challenges.
        </p>

        {/* Add a captivating gaming landscape image */}
        <img
          src="/images/xox.jpg"
          alt="Gaming Landscape"
          className="w-full h-64 object-cover rounded-xl shadow-lg mb-8"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* World 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Fantasy Realm</h3>
            <p className="text-gray-700">
              Dive into magical lands filled with epic quests and ancient mysteries.
            </p>
          </div>

          {/* World 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Action Arena</h3>
            <p className="text-gray-700">
              Experience heart-pounding battles and test your skills in action-packed missions.
            </p>
          </div>

          {/* World 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Survival Zone</h3>
            <p className="text-gray-700">
              Face the ultimate test of resilience in harsh, resource-scarce environments.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 py-8 bg-gradient-to-r from-green-800 via-violet-500 to-black text-white rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Are You Ready to Game?</h3>
          <p className="text-lg mb-8">
            Start your gaming adventure today and conquer new challenges.
          </p>
          <a
            href="/games"
            className="bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Explore Games
          </a>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/play.png" alt="Play Store" className="w-16 h-16" />
            </a>
            <a
              href="https://store.playstation.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/ps.png" alt="PlayStation Store" className="w-16 h-16" />
            </a>           
          </div>
        </div>
      </section>
    </div>
  );
}

export default GamingWorlds;
