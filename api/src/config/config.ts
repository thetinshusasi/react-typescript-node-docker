import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'adminUser';
const MONGO_PASSWORD = process.env.MONGO_USERNAME || 'adminUser';
const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@testcluster.hukli.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const MONGO = {
    url,
    options: MONGO_OPTIONS
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;
