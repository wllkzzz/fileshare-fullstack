import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
    name: String,
    size: Number,
    type: String,
    date: Date,
    link: String,
  });

export const FileModel = mongoose.model('File', FileSchema);