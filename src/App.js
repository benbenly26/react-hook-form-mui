import React, { useState } from "react";
import "./App.css";
import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import CustomInput from "./Components/CustomInput";
import SearchSelect from "./Components/SelectInput";
import { top100Films } from "./helpers/helpers";

export default function App() {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "First name must be at least 3 characters")
      .required("First name is required"),
    secondName: yup.string(),
    movie: yup.object().nullable().required("Movie is required"),
  });

  const {
    control,
    handleSubmit,
    register,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
    mode: "all",
  });

  console.log("errors", errors);
  const handleSave = async (data) => {
    try {
      toast.success("data added successfully");
      console.log("data", data);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>Hook Form</Typography>
          <i className="fas fa-heartbeat" />
        </Box>
        <Box className="p-2" sx={{ width: "25%" }}>
          <CustomInput
            placeholder={"Enter..."}
            label="First Name"
            name="firstName"
            control={control}
            size="small"
            errors={errors}
          />
        </Box>
        <Box className="p-2" sx={{ width: "25%" }}>
          <CustomInput
            placeholder={"Enter..."}
            label="Second Name"
            name="secondName"
            control={control}
            size="small"
          />
        </Box>
        <Box className="p-2" sx={{ width: "25%" }}>
          <SearchSelect
            placeholder={"Select..."}
            label="Search Select"
            control={control}
            options={top100Films}
            name="movie"
            size="small"
            errors={errors}
          />
        </Box>
        <Box className="mt-3">
          <Button variant="outlined" onClick={handleSubmit(handleSave)}>
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
}
