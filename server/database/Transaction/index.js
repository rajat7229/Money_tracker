import mongoose from "mongoose";

const TransSchema = new mongoose.Schema({
    user: [{
        type: mongoose.Types.ObjectId,
        ref: "users"
    }],
    category: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
}, {
    timestamps: true
});

export const TransModel = mongoose.model("transaction", TransSchema);