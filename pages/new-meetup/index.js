import { MeetupForm } from "/components/Meetups/MeetupForm";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

function NewMeetup() {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities!"
        />
      </Head>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetup;
