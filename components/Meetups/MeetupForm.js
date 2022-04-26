import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";

const initialValues = {
  title: "",
  image: "",
  address: "",
  description: "",
};

export const MeetupForm = (props) => {
  const [meetupData, setMeetupData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeetupData({
      ...meetupData,
      [name]: value,
    });
  };

  const handleAddMeetup = () => {
    props.onAddMeetup(meetupData);
    setMeetupData(initialValues);
  };
  return (
    <div>
      <Stack>
        <TextField
          margin="normal"
          id="outlined-name"
          label="Title"
          name="title"
          value={meetupData.title}
          onChange={handleChange}
          color="secondary"
        />
        <TextField
          margin="normal"
          id="outlined-name"
          label="Image URL"
          name="image"
          value={meetupData.image}
          onChange={handleChange}
          color="secondary"
        />
        <TextField
          margin="normal"
          id="outlined-name"
          label="Address"
          name="address"
          value={meetupData.address}
          onChange={handleChange}
          color="secondary"
        />
        <TextField
          margin="normal"
          id="outlined-name"
          label="Description"
          name="description"
          value={meetupData.description}
          onChange={handleChange}
          color="secondary"
          multiline
          rows={5}
        />
        <Button
          color="secondary"
          sx={{
            py: "1rem",
            my: "1rem",
            color: "white",
            backgroundColor: "#D82148",
            "&:hover": { backgroundColor: "#da103b" },
          }}
          variant="contained"
          onClick={handleAddMeetup}
        >
          ADD
        </Button>
      </Stack>
    </div>
  );
};
