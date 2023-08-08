import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Alert,
  AlertTitle,
  Button,
} from "@mui/material";
import { useState } from "react";
import { triggerNotification } from "../../utils";
import emailService from "../../services/email";
import customersService from "../../services/customers";

export const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [validation, setValidation] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (name.length < 3) {
      triggerNotification(
        setValidation,
        "Name must be longer than 3 characters"
      );
      return;
    }
    if (phone.length < 10) {
      triggerNotification(
        setValidation,
        "Phone number must be at least 10 characters long, like 0473 564 811"
      );

      return;
    }
    if (address.length < 5) {
      triggerNotification(
        setValidation,
        "Address must be 5 characters or longer"
      );
      return;
    }
    try {
      await emailService.sendEmail(name, phone, address);
      await customersService.create(name, phone, address);
      setName("");
      setPhone("");
      setAddress("");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      triggerNotification(
        setValidation,
        "There was an error, please try again"
      );
    }
  };
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          color: "#5CBBA8",
        }}
      >
        We{" "}
        <span
          style={{
            color: "#C77FC1",
          }}
        >
          clean
        </span>{" "}
        it for you.
      </Typography>
      <form onSubmit={handleSubmit}>
        <List>
          <ListItem>
            <ListItemText>Just give us a name</ListItemText>
            <TextField
              sx={{
                maxWidth: "40vw",
              }}
              placeholder="Alex Hewit"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </ListItem>
          <ListItem>
            <ListItemText>A phone number</ListItemText>
            <TextField
              sx={{
                maxWidth: "40vw",
              }}
              placeholder="0473 564 811"
              type={"tel"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </ListItem>
          <ListItem>
            <ListItemText>And an address</ListItemText>
            <TextField
              placeholder="123 Somestreet, suburb"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </ListItem>
        </List>
        {success && (
          <Alert severity="success">
            <AlertTitle>Information sent.</AlertTitle>
            <Typography variant="body1">
              One of our team members will get in touch with you
            </Typography>
          </Alert>
        )}
        {validation && (
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#5CBBA8",
              }}
            >
              {validation}
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#C77FC1",
              mt: {
                xs: "3vh",
                sm: "5vh",
              },
            }}
            type="submit"
            disabled={validation ? true : false}
          >
            Submit
          </Button>
        </Box>
      </form>
      <Typography
        variant="body1"
        sx={{
          color: "#5CBBA8",
        }}
      ></Typography>
    </Box>
  );
};
