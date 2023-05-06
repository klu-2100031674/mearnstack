const mongoose = require("mongoose");

const ArtistScehma = new mongoose.Schema(
  {
    name: String,
    role:String,
    dec:String,
    image:String,
  },
  {
    collection: "Artists",
  }
);

mongoose.model("Artists", ArtistScehma);