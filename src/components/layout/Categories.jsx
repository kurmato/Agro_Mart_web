import React from 'react';
import { categories } from '../content/categories';

function Categories() {
  return (
    <div className="container mx-auto mt-6 px-4">
      <div className="w-full max-w-md mx-auto">
        <label
          htmlFor="category-select"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Select a Category
        </label>
        <select
          id="category-select"
          className="w-full border border-gray-300 rounded-md bg-white p-2 text-gray-700 shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
        >
          <option value="">Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Categories;
