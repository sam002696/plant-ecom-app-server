const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    sold: {
      type: Number,
    },
    plantCategory: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    currentStatus: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plant", PlantSchema);
