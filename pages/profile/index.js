import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { getSession, useSession } from "next-auth/react";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Profile() {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          my: 12,
          width: "100%",
          height: "55vh",
        },
      }}
    >
      <Paper elevation={5} sx={{ textAlign: "center" }}>
        <Avatar
          alt="user image"
          src={user.image}
          sx={{
            width: 150,
            height: 150,
            m: "auto",
            mt: "-70px",
            boxShadow: "0 0 50px #aaa",
            border: "2px solid #D82148",
          }}
        />
        <h1>{user?.name}</h1>
        <Typography
          gutterBottom
          variant="h6"
          sx={{ textAlign: "center", my: 4 }}
          component="p"
        >
          {user?.email}
        </Typography>

        <Box sx={{ width: 500, m: "auto" }}>
          <BottomNavigation showLabels sx={{ my: 5 }}>
            <BottomNavigationAction
              label="Recents"
              icon={<RestoreIcon sx={{ color: "#D82148" }} />}
            />
            <BottomNavigationAction
              label="Favorites"
              icon={<FavoriteIcon sx={{ color: "#D82148" }} />}
            />
            <BottomNavigationAction
              label="Nearby"
              icon={<LocationOnIcon sx={{ color: "#D82148" }} />}
            />
          </BottomNavigation>
        </Box>
      </Paper>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permenent: false,
      },
    };
  }
  return { props: {} };
}
