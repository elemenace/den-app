import React, { useEffect, useState } from "react";

function Characters() {
  const [products, setProducts] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-400 via-pink-200 to-violet-400">
      <section
        id="menu"
        className="py-16 bg-gradient-to-r from-black via-blue-900 to-blue-700 text-center"
      >
        <h2 className="text-4xl font-extrabold mb-8">Products</h2>
        <p className="text-lg mb-8">Discover some amazing products</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <li
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: "white" }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {product.title}
              </h3>
              <p className="text-gray-800">{product.description}</p>
            </li>
          ))}
        </ul>

        <section
          id="menu"
          className="py-16 bg-gradient-to-r from-black via-blue-900 to-blue-700 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Are You Ready to Explore?
            </h2>
            <p className="text-lg mb-6">
              Embark on your journey and discover hidden gems
            </p>
            <a
              href="https://www.playstation.com/en-ph/support/hardware/ps5-get-started-set-up/"
              className="bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Find More Cool Products
            </a>

            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://www.playstation.com/en-ph/support/hardware/ps5-get-started-set-up/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/play.png"
                  alt="Play Store"
                  className="w-16 h-16"
                />
              </a>
              <a
                href="https://www.playstation.com/en-us/games/genshin-impact/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/ps.png" alt="PS5" className="w-16 h-16" />
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Characters;
