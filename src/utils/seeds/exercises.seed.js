const mongoose = require("mongoose");
const connectDb = require("../db");
const Exercise = require("../../api/workouts/exercises/exercises.model");

const exercises = [
  {
    name: "Dominadas A",
    description: "3 x 10 repeticiones",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612",
  },
  {
    name: "Dominadas B",
    description: "4 x 12, 10, 10 y 8 repeticiones",
    rest: "2 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612",
  },
  {
    name: "Dominadas C",
    description: "4 x 12 repeticiones",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612",
  },
  {
    name: "Jalón al pecho A",
    description: "3 x 10 repeticiones",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105",
  },
  {
    name: "Jalón al pecho B",
    description: "4 x 12, 10, 10 y 8 repeticiones",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105",
  },
  {
    name: "Jalón al pecho C",
    description: "4 x 12 repeticiones",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105",
  },
  {
    name: "Remo maquina A",
    description: "3 x 10 repeticiones",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127",
  },
  {
    name: "Remo maquina B",
    description: "4 x 12, 10, 10, 8 repeticiones",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127",
  },
  {
    name: "Remo maquina C",
    description: "4 x 12 repeticiones",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127",
  },
  {
    name: "Remo mancuerna A",
    description: "3 x 10 repeticiones",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069",
  },
  {
    name: "Remo mancuerna B",
    description: "4 x 12, 10, 10, 8 repeticiones",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069",
  },
  {
    name: "Remo mancuerna C",
    description: "4 x 12 repeticiones",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069",
  },
  {
    name: "Press banca plano A",
    description: "3 x 10 repeticiones",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800",
  },
  {
    name: "Press banca plano B",
    description: "4 x 12, 10, 10 y 8 repeticiones",
    rest: "2 minutos",

    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800",
  },
  {
    name: "Press banca plano C",
    description: "4 x 12 repeticiones",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800",
  },
];

const exercisesDocuments = exercises.map((exercise) => new Exercise(exercise));

connectDb()
  .then(async () => {
    await Exercise.collection.drop();
    console.log("SEED :collection exercices deleted correctly");
  })
  .catch((error) => console.log("Could not delete" + error))
  .then(async () => {
    await Exercise.insertMany(exercisesDocuments);
    console.log("Exercises added correctly");
  })
  .catch((error) => console.log("Could not add data" + error))
  .finally(() => mongoose.disconnect());
