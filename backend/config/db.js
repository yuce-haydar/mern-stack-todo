const mongoose = require("mongoose");

const baglan = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`mongo baglandı ${conn.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = baglan;
