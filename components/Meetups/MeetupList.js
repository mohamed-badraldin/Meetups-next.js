import { MeetupItem } from "./MeetupItem";
export const MeetupList = (props) => {
  return (
    <>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </>
  );
};
