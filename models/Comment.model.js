const { Schema, model } = require("mongoose");


const commentSchema = new Schema(
  {
    user: {type: Schema.Types.ObjectId, ref: "User"},
    comment: {type: String, required: true, trim: true, maxlength: 200}
  }
);

const User = model("Comment", commentSchema);

module.exports = User;
