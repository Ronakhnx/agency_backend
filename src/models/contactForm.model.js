import mongoose, { Schema } from "mongoose";
const contactFormSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    // country: {
    //   type: String,
    //   required: true,
    // },
    mobileNo: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ContactForm = mongoose.model("ContactForm", contactFormSchema);
