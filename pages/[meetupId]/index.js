import { MeetupDetails } from "../../components/Meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const MeetupDetailsPage = ({ meetup }) => {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      <MeetupDetails {...meetup} />
    </>
  );
};

export async function getStaticPaths() {
  let client, meetups;
  try {
    client = await MongoClient.connect(process.env.DATABASE_URL);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }

  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  let client, selectedMeetup;
  const meetupId = context.params.meetupId;
  try {
    client = await MongoClient.connect(process.env.DATABASE_URL);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    selectedMeetup = await meetupsCollection.findOne({
      _id: ObjectId(meetupId),
    });
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }

  return {
    props: {
      meetup: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetailsPage;
