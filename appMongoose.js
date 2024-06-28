const { connect } = require("mongoose");

const MONGO_URL = "mongodb+srv://MuskanSharma:%40khushi%2320@cluster0.m06x2yr.mongodb.net"

const DB_NAME = `cs-mern`;

async function connectDb() {
    try {
        await connect(`${MONGO_URL}/${DB_NAME}`);
        console.log(`MongoDB connected!`);
    } catch (error) {
        console.log(error);
    }
}

connectDb();