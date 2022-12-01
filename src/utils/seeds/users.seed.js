const mongoose = require("mongoose");
const connectDb = require("../db");
const User = require('../../api/user/user.model')

const users = [
    {
        name: 'Admin Adri',
        user: 'AdminAdri',
        email: 'adminadri@gmail.com',
        password: 'administrator123',
        age: 20,
        rol: 'admin'
    },
    {
        name: 'Admin Guille',
        user: 'AdminGuille',
        email: 'adminguille@gmail.com',
        password: 'administrator123',
        age: 20,
        rol: 'admin'
    },
    {
        name: 'Admin Angelica',
        user: 'AdminAngelica',
        email: 'adminangelica@gmail.com',
        password: 'administrator123',
        age: 20,
        rol: 'admin'
    },
    {
        name: 'Admin Alvaro',
        user: 'AdminAlvaro',
        email: 'adminalvaro@gmail.com',
        password: 'administrator123',
        age: 20,
        rol: 'admin'
    },{
        name: 'Default User',
        user: 'defaultuser',
        email: 'defaultuser@gmail.com',
        password: 'defaultuser123',
        age: 20,
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