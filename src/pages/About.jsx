import React from 'react';

function About() {
  return (
    <section
      id="menu"
      className="py-16 bg-gradient-to-r from-black via-blue-900 to-blue-700 text-center text-white"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-6xl font-extrabold text-transparent bg-clip-text mb-12"
          style={{
            WebkitTextStroke: '2px black',
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #000000, #00008b, #003366)',
          }}
        >
          Welcome to Game World
        </h2>
        <p className="text-lg mb-12">
          Game World is where adventure meets imagination. Discover breathtaking realms, conquer epic challenges, and connect with a global community of gamers who share your passion for exploration and excitement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <img
              src="/images/god.jpg"
              alt="Gaming Adventure"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p>
              Step into sprawling open worlds like *Genshin Impact* and uncover the secrets of stunning landscapes. From mystical dungeons to bustling cities, every corner is filled with surprises.
            </p>
          </div>
          <div className="space-y-4">
            <img
              src="/images/nite.jpg"
              alt="Multiplayer Gaming"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p>
              Connect with friends in high-stakes multiplayer battles, co-op missions, or team challenges. Whether it’s the fierce arenas of *Fortnite* or the intense firefights of *Call of Duty*, the thrill is unmatched.
            </p>
          </div>
          <div className="space-y-4">
            <img
              src="/images/gta.jpg"
              alt="Virtual Reality"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p>
              Experience the future of gaming with virtual reality. Immerse yourself in hyper-realistic worlds where the line between game and reality blurs.
            </p>
          </div>
          <div className="space-y-4">
            <img
              src="/images/xox.jpg"
              alt="Gaming Community"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p>
              Join a thriving community of gamers. Share strategies, celebrate victories, and create unforgettable memories in the vibrant world of gaming.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-lg mb-6">
            Game World isn’t just about playing it’s about experiencing. With cutting-edge innovations, ever-expanding universes, and a diverse range of titles, there’s always something new to explore.
          </p>
          <a
            href="#menu"
            className="bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Explore Games
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
