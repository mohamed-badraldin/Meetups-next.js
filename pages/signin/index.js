import Image from "next/image";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Stack from "@mui/material/Stack";
import meetupLogo from "/public/meetup-1.svg";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";

const SignIn = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src={meetupLogo} alt={"logo"} width={"300"} height={"200"} />
      </div>
      <Stack direction="column" spacing={3} width={"50%"} margin={"auto"}>
        <Button
          onClick={() =>
            signIn("google", {
              callbackUrl: "https://meetups-next-js-six.vercel.app/",
            })
          }
          sx={{
            position: "realative",
            position: "realative",
            background: "#ce493c",
            "&:hover": { background: "#b63529" },
            color: "#fff",
          }}
          variant="contained"
          startIcon={
            <GoogleIcon
              sx={{ position: "absolute", left: "10px", top: "8px" }}
            />
          }
        >
          Gmail
        </Button>

        <Button
          onClick={() =>
            signIn("facebook", {
              callbackUrl: "https://meetups-next-js-six.vercel.app/",
            })
          }
          sx={{
            position: "realative",
            position: "realative",
            background: "#3578e5",
            "&:hover": { background: "#1a5dcb" },
            color: "#fff",
          }}
          variant="contained"
          startIcon={
            <FacebookIcon
              sx={{ position: "absolute", left: "10px", top: "8px" }}
            />
          }
        >
          Facebook
        </Button>

        <Button
          onClick={() =>
            signIn("github", {
              callbackUrl: "https://meetups-next-js-six.vercel.app",
            })
          }
          sx={{
            position: "realative",
            background: "#202020",
            "&:hover": { background: "black" },
            color: "#fff",
          }}
          variant="contained"
          startIcon={
            <GitHubIcon
              sx={{ position: "absolute", left: "10px", top: "8px" }}
            />
          }
        >
          GitHub
        </Button>
      </Stack>
    </>
  );
};

export default SignIn;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permenent: false,
      },
    };
  }
  return { props: {} };
}
