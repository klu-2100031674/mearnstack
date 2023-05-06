const mongoose = require("mongoose");

const FeedBackScehma = new mongoose.Schema(
  {
    id: { type: Number, unique: true },
    date:String,
    year:Number,
    day:String,
    country:String,
    eventname:String,
  },
  {
    collection: "Events",
  }
);

mongoose.model("Events", FeedBackScehma);