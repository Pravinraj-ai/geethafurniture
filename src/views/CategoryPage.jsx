import React, { useEffect } from "react";

import data from "../assets/categories.json";


const CategoryPage = ({ categoryId, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const category = data.categories.find((c) => c.id === categoryId);

    if (!category) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center">
                <p className="text-xl">Category not found 😕</p>
                <button
                    onClick={onBack}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Go Back
                </button>
            </div>
        );
    }



    return (
        <div className="min-h-screen bg-white">
            {/* ✅ Top Banner (1/3 screen height) */}
            <div
                className="relative h-[33vh] bg-cover bg-center text-white"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + category.banner})`,
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Category title - centered */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
                    <h1 className="text-4xl font-bold capitalize">{category.name}</h1>
                </div>

                {/* ✅ Back button - bottom-left */}
                <button
                    onClick={onBack}
                    className="absolute bottom-6 left-6 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition z-10"
                >
                    ← Back
                </button>
            </div>

            {/* ✅ Product Grid */}
            <div className="py-12">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {category.products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center"
                        >
                            <div className="w-full aspect-square overflow-hidden flex justify-center items-center bg-gray-100 rounded-lg mb-4">
                                <img
                                    src={process.env.PUBLIC_URL + product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-2"
                                />
                            </div>
                            {/* <h3 className="font-semibold text-lg text-gray-800 text-center">
                                {product.name}
                            </h3> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
