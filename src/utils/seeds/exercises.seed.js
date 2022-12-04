const mongoose = require("mongoose");
const connectDb = require("../db");
const Exercise = require("../../api/workouts/exercises/exercises.model");

const exercises = [
  {
    name: "Dominadas A",
    description: "3 x 10",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612",
  },
  {
    name: "Dominadas B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612",
  },
  {
    name: "Dominadas C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612",
  },
  {
    name: "Jalón al pecho A",
    description: "3 x 10",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105",
  },
  {
    name: "Jalón al pecho B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105",
  },
  {
    name: "Jalón al pecho C",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105",
  },
  {
    name: "Remo maquina A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127",
  },
  {
    name: "Remo maquina B",
    description: "4 x 12, 10, 10, 8",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127",
  },
  {
    name: "Remo maquina C",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127",
  },
  {
    name: "Remo mancuerna A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069",
  },
  {
    name: "Remo mancuerna B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069",
  },
  {
    name: "Remo mancuerna C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069",
  },
  {
    name: "Press banca plano A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800",
  },
  {
    name: "Press banca plano B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",

    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800",
  },
  {
    name: "Press banca plano C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800",
  },
  {
    name: "Press banca inclinado A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Barbell-Bench-Press_dc0c6279-d038-44f5-a682-54c2a5e2602c_600x600.png?v=1612137944"
  },
  {
    name: "Press banca inclinado B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Barbell-Bench-Press_dc0c6279-d038-44f5-a682-54c2a5e2602c_600x600.png?v=1612137944"
  },
  {
    name: "Press banca inclinado C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Barbell-Bench-Press_dc0c6279-d038-44f5-a682-54c2a5e2602c_600x600.png?v=1612137944"
  },
  {
    name: "Press mancuerna A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bench-Press_13090f67-ccfc-4f3a-9bab-e75d753fa9fa_600x600.png?v=1612137970"
  },
  {
    name: "Press mancuerna B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bench-Press_13090f67-ccfc-4f3a-9bab-e75d753fa9fa_600x600.png?v=1612137970"
  },
  {
    name: "Press mancuerna C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bench-Press_13090f67-ccfc-4f3a-9bab-e75d753fa9fa_600x600.png?v=1612137970"
  },
  {
    name: "Flexiones A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Push-Ups_600x600.png?v=1640121436"
  },
  {
    name: "Flexiones B",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Push-Ups_600x600.png?v=1640121436"
  },
  {
    name: "Cruce de poleas A",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Crossover_09c90616-2777-47ed-927e-d5987edfce09_600x600.png?v=1612138036"
  },
  {
    name: "Cruce de poleas B",
    description: "3 x 15",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Crossover_09c90616-2777-47ed-927e-d5987edfce09_600x600.png?v=1612138036"
  },
  {
    name: "Shoulder press A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Shoulder-Press_da0aa742-620a-45f7-9277-78137d38ff28_600x600.png?v=1612138495"
  },
  {
    name: "Shoulder press B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Shoulder-Press_da0aa742-620a-45f7-9277-78137d38ff28_600x600.png?v=1612138495"
  },
  {
    name: "Elevación lateral hombros A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Lateral-Raise_31c81eee-81c4-4ffe-890d-ee13dd5bbf20_600x600.png?v=1612138523"
  },
  {
    name: "Elevación lateral hombros B",
    description: "4 x 12, 10, 10 , 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Lateral-Raise_31c81eee-81c4-4ffe-890d-ee13dd5bbf20_600x600.png?v=1612138523"
  },
  {
    name: "Elevación lateral hombros C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Lateral-Raise_31c81eee-81c4-4ffe-890d-ee13dd5bbf20_600x600.png?v=1612138523"
  },
  {
    name: "Elevación frontal hombros A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Front-Raise_11804c3c-22d1-4589-a035-e30ad72149f3_600x600.png?v=1612138576"
  },
  {
    name: "Elevación frontal hombros B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Front-Raise_11804c3c-22d1-4589-a035-e30ad72149f3_600x600.png?v=1612138576"
  },
  {
    name: "Elevación frontal hombros C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Front-Raise_11804c3c-22d1-4589-a035-e30ad72149f3_600x600.png?v=1612138576"
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
