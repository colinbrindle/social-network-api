const { Schema, Types } = require("mongoose");

// User model schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/, // Regex expression to validate email
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// friendCount virtual
userSchema.virtual("friendCount").get(() => {
  return this.friends.length;
});

// Initializing and exporting User model
const User = model("User", userSchema);

module.exports = User;
