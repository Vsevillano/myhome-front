import { makeStyles } from "@mui/styles";

export const customLoaderStyles = makeStyles((theme) => ({
  loader: {
    display: "flex",
    margin: "0 auto",
    border: "5px solid #FFF",
    borderBottomColor: "#1976d2",
    borderRadius: "50%",
    boxSizing: "border-box",
    animation: "$rotation 1s linear infinite",
  },
  small: {
    width: "24px",
    height: "24px",
  },
  medium: {
    width: "48px",
    height: "48px",
  },
  large: {
    width: "96px",
    height: "96px",
  },
  "@keyframes rotation": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));
