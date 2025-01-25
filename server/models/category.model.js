import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
// Define a virtual field for products
categorySchema.virtual("products", {
  ref: "product",
  localField: "_id",
  foreignField: "category",
  // justOne: false,
});
// Ensure virtual fields are included in JSON responses
categorySchema.set("toJSON", { virtuals: true });
categorySchema.set("toObject", { virtuals: true });

const CategoryModel = mongoose.model("category", categorySchema);

export default CategoryModel;
