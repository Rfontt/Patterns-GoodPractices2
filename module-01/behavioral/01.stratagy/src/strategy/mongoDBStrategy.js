import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

export default class MongoDBStrategy {
    #instance;

    constructor(connectionString) {
        const { pathname: dbName } = new URL(connectionString);

        this.connectionString = connectionString.replace(dbName, '');
        this.db = dbName.replace(/\W/, '')

        this.connectionString = connectionString;
        this.colletion = 'warriors';
    }

    async connect() {
        const client = new MongoClient(this.connectionString);
        await client.connect();
        const db = client.db(this.db).collection(this.colletion);
        this.#instance = db;

    }

    create(item) {
        return this.#instance.insertOne(item);
    }

    read(item) {
        return this.#instance.find(item).toArray();
    }
}