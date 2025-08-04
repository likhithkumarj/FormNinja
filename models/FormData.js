import mongoose from 'mongoose';

const formFieldSchema = new mongoose.Schema({
  label: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  required: { type: Boolean, default: false },
  options: [String],
  conditionQuestion: { type: Boolean, default: false },
  ifOption: { type: String, default: null },
  conditionAnswer: { type: String, default: null }
});

const dynamicFormSchema = new mongoose.Schema({
  formName: { type: String, required: true },
  description: { type: String, required: true },
  createdby: { type: String, required: true },
  designation: { type: String, required: true },
  fields: [formFieldSchema]
});

export default mongoose.model('DynamicForm', dynamicFormSchema);
