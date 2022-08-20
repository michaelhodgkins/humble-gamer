const { Schema, model } = require("mongoose");


const gameSchema = new Schema(
  {
    name: {type: String, required: true},
    genre: {type: String, requried: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    rating: {type: Number}, 
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
  }
);

const User = model("Game", gameSchema);

module.exports = User;
