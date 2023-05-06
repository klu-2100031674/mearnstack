const mongoose = require("mongoose");

const FeedBackScehma = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    message:String,
  },
  {
    collection: "FeedBack",
  }
);

mongoose.model("FeedBack", FeedBackScehma);