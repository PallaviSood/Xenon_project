import mongoose from "mongoose";

const databaseUri =
  "mongodb+srv://paaras:004599@cluster0.r8fizis.mongodb.net/test?retryWrites=true&w=majority";

const database = mongoose
  .connect(databaseUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

export default database;
