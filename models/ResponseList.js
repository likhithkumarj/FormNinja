import mongoose from "mongoose";

const responseDataSchema = new mongoose.Schema({
  fieldName: { type: String, required: true }, 
  answer: Schema.Types.Mixed
});

const responseSchema = new mongoose.Schema({
  formId: { type: Schema.Types.ObjectId, ref: "DynamicForm", required: true },
  submittedAt: { type: Date, default: Date.now },
  responses: [responseDataSchema]
});

export default mongoose.model("FormResponse", responseSchema);
