import React from 'react';

function Menu() {
  return (
    <section
  id="menu"
  className="py-16 bg-gradient-to-r from-black via-blue-900 to-blue-700 text-center"
>
  <div className="max-w-4xl mx-auto">
    <h2
      className="text-6xl font-extrabold text-transparent bg-clip-text mb-20"
      style={{
        WebkitTextStroke: '2px black',
        color: 'transparent',
        backgroundImage: 'linear-gradient(to right, #000000, #00008b, #003366)',
      }}
    >
          TOP GAMES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          
          <RegionCard
            image="/images/cod.jpg"
            title="Call OF Duty"
            description=" Call of Duty is the world-renowned first-person shooter (FPS) franchise that has entertained players for decades."
          />
          <RegionCard
            image="/images/gta.jpg"
            title="Grand Theft Auto"
            description="Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective."
          />
          <RegionCard
            image="/images/nite.jpg"
            title="Fortnite"
            description="Fortnite Battle Royale is a player-versus-player game for up to 100 players, allowing one to play alone, in a duo, or in a squad ."
          />
          <RegionCard
            image="/images/2k.jpg"
            title="NBA2K 25"
            description="Stack wins, raise banners, and make history in NBA 2K25."
          />
          <RegionCard 
            image="/images/god.jpg"
            title="God of War"
            description="In God of War, players control Kratos, a Spartan warrior who is sent by the Greek gods to kill Ares, the god of war."
          />
          <RegionCard
            image="/images/impact.jpg"
            title="Mondstadt"
            description="Genshin Impact is an open-world, action role-playing game that allows the player to control one of four interchangeable characters in a party."
          />
        </div>
      </div>
    </section>
  );
}

function RegionCard({ image, title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
  
export default Menu;
