import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const CategoryItem = ({ category, onEdit, onDelete }) => {
  return (
    <div className="w-32 h-56 rounded shadow-md">
      <img
        alt={category.name}
        src={category.image}
        className="w-full object-scale-down"
      />
      <div className="h-9 flex items-center justify-center gap-2 px-2">
        {/* <button
          onClick={() => onEdit(category)}
          className="flex-1 bg-green-100 hover:bg-green-200 text-green-600 font-medium py-1 rounded px-3 text-xs"
        >
          Edit
        </button> */}
        <FaEdit
          onClick={() => onEdit(category)}
          className="cursor-pointer"
          size={20}
        />
        <FaRegTrashAlt
          onClick={() => onDelete(category)}
          className="cursor-pointer text-red-600"
          size={20}
        />
        {/* <button
          onClick={() => onDelete(category)}
          className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 font-medium py-1 rounded px-3 text-xs"
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};

export default CategoryItem;
