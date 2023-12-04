import { MongoClient, ServerApiVersion } from "mongodb";

console.log("Init database connection");

export default async (req, context) => {
  const mongoClient = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    console.time("start get handler");
    const database = await mongoClient.db(process.env.MONGODB_DATABASE);
    // console.time("connected to db. get collection")
    const collection = await database.collection(
      process.env.MONGODB_COLLECTION
    );
    console.time("connected to db. finding...");
    const results = await collection.find({}).toArray();
    console.timeEnd("connected to db. finding...");
    console.log(results);
    const test = new Response(JSON.stringify(results), {
      headers: {
        "content-type": "application/json",
      },
      statusCode: 200,
    });
    console.timeEnd("start get handler");
    return test;
  } catch (error) {
    return new Response(JSON.stringify({ theError: error.toString() }), {
      statusCode: 500,
      headers: { "content-type": "application/json" },
    });
  } finally {
    await mongoClient.close();
  }
};
