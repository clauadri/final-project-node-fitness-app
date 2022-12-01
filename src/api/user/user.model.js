const moongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = moongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    user: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true},
    rol: {type: String, enum: ["admin", "user"], default: "user"}
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = moongoose.model("users", userSchema);
module.exports = User;
