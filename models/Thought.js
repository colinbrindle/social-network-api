const { Schema, Types } = require("mongoose");
const moment = require("moment");
const Reactions = require("./Reaction");

// Thought schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [Reactions],
});

// formatDate method
thoughtSchema.methods.formatDate = function () {
  let unixDate = this.createdAt;
  return moment(unixDate).format("MMMM Do YYYY");
};

// Initializing and exporting Thought model
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
