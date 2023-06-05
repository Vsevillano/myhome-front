import { makeStyles } from "@mui/styles";

export const tareasStyles = makeStyles((theme) => ({
  tareasContainer: {
    maxWidth: "1536px",

    [theme.breakpoints.up("md")]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
}));
