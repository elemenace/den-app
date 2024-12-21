import React from 'react';

function head() {
  return (
    <section
      className="bg-blue-300 text-white h-screen flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: "url('/images/xox.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-5xl font-bold mb-4" style={{ WebkitTextStroke: '2px black', color: 'white' }}>
        Explore the World of Games
      </h1>
      <a href="#menu" className="bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
        Top Games
      </a>
    </section>
  );
}

export default head;
