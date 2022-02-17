import ContextStrategy from "./src/base/contentStrategy.js"
import MongoDBStrategy from "./src/strategy/mongoDBStrategy.js"
import PostgresStrategy from "./src/strategy/postgresStrategy.js"

const postgresConnectionString = 'postgres://rfontt:password0001@localhost:5432/heroes';
const postgresContext = new ContextStrategy(new PostgresStrategy(postgresConnectionString))
await postgresContext.connect();

const mongoDBConnectionString = 'mongodb://127.0.0.1:27017/heroes';
const mongoDBContext = new ContextStrategy(new MongoDBStrategy(mongoDBConnectionString));
await mongoDBContext.connect();

const data = [
    {
        name: 'Erick Wendel',
        type: 'transaction'
    },

    {
        name: 'Rfontt',
        type: 'activityLog'
    }
];

const contextTypes = {
    transaction: postgresContext,
    activityLog: mongoDBContext
}

for (const { type, name } of data) {
    const context = contextTypes[type];
    await context.create({ name: name + Date.now()})

    console.log(type, context.dbStrategy.name);
    console.log(await context.read());
}