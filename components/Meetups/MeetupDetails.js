import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const MeetupDetails = (props) => {
  const { title, image, address, description } = props;
  return (
    <Card sx={{ maxWidth: "100%", my: "5", textAlign: "center" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: "50vh" }}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <LocationOnIcon sx={{ display: "inline", my: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {address}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ my: 1, mb: 5 }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
