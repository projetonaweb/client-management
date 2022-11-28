import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./style";

type PropsType = {
  id?: string;
  type: string;
  name?: string;
  placeholder?: string;
  value?: any;
  handleOnChange?: any;
  disabled?: boolean
};

export const Inputs = ({ type, id, name, placeholder, handleOnChange, value, disabled}: PropsType) => {
  return (
    <C.ContainerInputs>
      <label htmlFor={id}>{name}</label>
      <input
        disabled={disabled}
        required
        placeholder={placeholder}
        id={id}
        type={type}
        onChange={handleOnChange}
        value={value || ""}
      />
    </C.ContainerInputs>
  );
};
