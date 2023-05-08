import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  from: { type: Date, required: true },
  till: { type: Date, required: true },
});

const User = mongoose.model("user", userSchema);
export default User;

//expected that schema values are required so set that to true
