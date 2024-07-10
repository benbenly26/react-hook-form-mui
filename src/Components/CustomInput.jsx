import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { MdErrorOutline } from "react-icons/md";

const CustomInput = ({
  name,
  control,
  label,
  size,
  errors,
  placeholder,
  disabled,
  type,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            variant="outlined"
            placeholder={placeholder}
            disabled={disabled}
            type={type}
            fullWidth
            size={size}
            error={errors ? !!errors[name] : false}
            helperText={
              errors && errors[name] ? (
                <span style={{ color: "red" }} className="d-flex">
                  <MdErrorOutline
                    className="mx-1"
                    style={{ fontSize: "15px" }}
                  />{" "}
                  {errors[name].message}
                </span>
              ) : (
                ""
              )
            }
          />
        )}
      />
    </>
  );
};

export default CustomInput;
