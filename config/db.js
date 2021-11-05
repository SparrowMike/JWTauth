const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost:27017/node_auth",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: true,
    }
  );

  console.log("MongoDB Connected");
};

module.exports = connectDB;
