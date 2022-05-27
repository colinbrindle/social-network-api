const { Schema, Types } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// formatDate method
reactionSchema.methods.formatDate = function () {
  let unixDate = this.createdAt;
  return moment(unixDate).format("MMMM Do YYYY");
};

// Exporting reactionSchema
module.exports = reactionSchema;
