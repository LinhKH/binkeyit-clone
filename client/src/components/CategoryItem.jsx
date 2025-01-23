import React from "react";

const CategoryItem = ({ category, onEdit, onDelete }) => {
  return (
    <div className="w-32 h-56 rounded shadow-md">
      <img
        alt={category.name}
        src={category.image}
        className="w-full object-scale-down"
      />
      <div className="items-center h-9 flex gap-2">
        <button
          onClick={() => onEdit(category)}
          className="flex-1 bg-green-100 hover:bg-green-200 text-green-600 font-medium py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(category)}
          className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 font-medium py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;