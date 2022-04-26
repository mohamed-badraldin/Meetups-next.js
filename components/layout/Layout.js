import { Container } from "@mui/material";
import { MainNavigation } from "./MainNavigation";

export const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <Container maxWidth={"md"}>{props.children}</Container>
    </>
  );
};
