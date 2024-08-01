import React from "react";
import { Wrapper, Label, Title, WrapperInput } from "./CustomInput.styled";

const CustomInput = (props) => {
  const {
    type,
    title,
    label,
    name,
    value,
    onChange,
    error,
    placeholder,
    disabled,
  } = props;

  return (
    <Wrapper>
      {title && <Title> {title} </Title>}
      <WrapperInput disabled={disabled}>
        <input
          type={type}
          className={error ? "error" : ""}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
        />
      </WrapperInput>
      {label && <Label error={error}>{label}</Label>}
    </Wrapper>
  );
};

export default CustomInput;
