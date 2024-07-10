import * as React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { MdErrorOutline } from "react-icons/md";

export default function SearchSelect({
  control,
  name,
  size,
  errors,
  options,
  label,
  placeholder,
  disabled,
}) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: "req" }}
        defaultValue={null}
        render={({ field }) => (
          <Autocomplete
            {...field}
            options={options}
            disabled={disabled}
            getOptionLabel={(option) => option.label}
            onChange={(_, data) => field.onChange(data)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                variant="outlined"
                disabled={disabled}
                placeholder={placeholder}
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
        )}
      />
    </>
  );
}
