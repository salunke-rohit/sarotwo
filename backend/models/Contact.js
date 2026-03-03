import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    message: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

// ✅ DEFINE the model
const Contact = mongoose.model("Contact", contactSchema);

// ✅ EXPORT the SAME name
export default Contact;