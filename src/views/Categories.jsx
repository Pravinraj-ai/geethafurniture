import React from "react";
import data from "../assets/categories.json";

const Categories = ({ onSelectCategory }) => {
  const categories = data.categories;

  return (
    <div id="categories" className="py-12 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8">Browse Popular Categories</h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="cursor-pointer w-[45%] sm:w-[45%] md:w-[160px] rounded-lg shadow-lg hover:scale-105 transition-transform bg-white"
          >
            {/* Square image container */}
            <div className="w-full aspect-square overflow-hidden rounded-t-lg flex items-center justify-center bg-white">
              <img
                src={process.env.PUBLIC_URL + cat.image}
                alt={cat.name}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="p-3 text-center font-semibold">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
