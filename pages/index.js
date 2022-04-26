import { MongoClient } from "mongodb";
import { MeetupList } from "../components/Meetups/MeetupList";
import Head from "next/head";

function HomePage({ meetups }) {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name="description"
          content="Brose a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

export async function getStaticProps() {
  let client, meetups;
  try {
    client = await MongoClient.connect(process.env.DATABASE_URL);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    meetups = await meetupsCollection.find().sort({ _id: -1 }).toArray();
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
