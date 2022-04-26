import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

export const MeetupItem = (props) => {
  const { id, title, image } = props;
  const router = useRouter();
  const handleMeetupDetails = () => {
    router.push("/" + id);
  };
  return (
    <Card
      sx={{
        maxWidth: "100%",
        my: "5%",
        boxShadow: "0px .5px 10px #d82148",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        image={image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ textAlign: "center" }}
          component="div"
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="secondary"
          variant="contained"
          sx={{
            m: "auto",
            my: 3,
            px: "2rem",
            backgroundColor: "#D82148",
            "&:hover": { backgroundColor: "#da103b" },
            color: "white",
          }}
          onClick={handleMeetupDetails}
        >
          Meetup Details
        </Button>
      </CardActions>
    </Card>
  );
};
