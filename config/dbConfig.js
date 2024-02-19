const mongoose = require("mongoose");

connect = mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("mongoDB connection successful");
});

connection.on("error", (error) => {
  console.log("mongoDB connection error", error);
});

module.exports = mongoose;
