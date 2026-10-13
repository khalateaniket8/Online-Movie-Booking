const mongoose = require("mongoose");

async function coonectDB() {
    await mongoose.connect(process.env.MONGO_URI)

    console.log("DB is connected");
};

module.exports = coonectDB