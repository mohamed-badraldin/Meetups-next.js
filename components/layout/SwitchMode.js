import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useState } from "react";

const SwitchMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={() => setDarkMode(!darkMode)}
      color="inherit"
    >
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default SwitchMode;
