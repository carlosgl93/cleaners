import { Box } from "@mui/material";
import { mainContainer } from "./styles";
import { Form } from "../../components/ContactForm/Form";

export const Home = () => {
  return (
    <Box sx={mainContainer}>
      <Form />
    </Box>
  );
};
