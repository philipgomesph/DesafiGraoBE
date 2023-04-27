import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://philipgomesph:1234@cluster0.qbsx64t.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Mongo atlas conectado"))
  .catch((error) => console.log(error));
