import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack, Alert, Snackbar, AlertTitle } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Header from "../../Components/Header";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("Form submitted");
    handleClick();
  };

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const currencies = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manger",
      label: "Manger",
    },
    {
      value: "User",
      label: "User",
    },
  ];
  return (
    <>
      <Box>
        <Header title="CREATE USER" subTitle="Create a New User Profile" />
      </Box>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="Form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={"row"} spacing={2}>
          <TextField
            error={errors.firstName ? true : false}
            helperText={errors.firstName ? "First Name is required" : ""}
            {...register("firstName", { required: true, maxLength: 10 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
          <TextField
            error={errors.lastName ? true : false}
            helperText={errors.lastName ? "Last Name is required" : ""}
            {...register("lastName", { required: true, maxLength: 10 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>
        <TextField
          error={errors.email ? true : false}
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          helperText={errors.email ? "Email is required" : ""}
          label="Email"
          variant="filled"
        />
        <TextField
          error={errors.contact ? true : false}
          {...register("contact", {
            required: true,
            maxLength: 11,
            pattern: /^(?:\+20|0)?1[0125][0-9]{8}$/,
          })}
          helperText={errors.contact ? "Contact Number is required" : ""}
          label="Contact Number"
          variant="filled"
        />
        <TextField
          error={errors.address1 ? true : false}
          {...register("address1", { required: true })}
          helperText={errors.address1 ? "Address 1 is required" : ""}
          label="Address 1"
          variant="filled"
        />
        <TextField
          error={errors.address2 ? true : false}
          {...register("address2")}
          helperText={errors.address2 ? "Address 2 is optional" : ""}
          label="Address 2"
          variant="filled"
        />

        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          variant="filled"
          defaultValue="User"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            Create New User
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
}
