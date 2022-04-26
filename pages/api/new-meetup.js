import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://badr:01068118614@cluster0.qylph.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      res.status(201).json({ message: "meetup is inserted!" });
    } catch (err) {
      console.error(err);
    } finally {
      client.close();
    }
  }
};
export default handler;
