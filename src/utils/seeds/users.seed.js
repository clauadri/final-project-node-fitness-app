const mongoose = require("mongoose");
const connectDb = require("../db");
const User = require('../../api/user/user.model')

const users = [
    {
        name: 'Mister Pruebas',
        user: 'Admin',
        email: 'admin@gmail.com',
        password: 'administrator123',
        age: 20,
        rol: 'admin'
    },
]

const usersDocuments = users.map((user) => new User(user));

connectDb()
  .then(async () => {
    await User.collection.drop();
    console.log("Collection users deleted correctly ");
  })
  .catch((error) => console.log("Could not delete" + error))
  .then(async () => {
    await User.insertMany(usersDocuments);
    console.log("Users added correctly ");
  })
  .catch((error) => console.log("Could not add data " + error))
  .finally(() => mongoose.disconnect());