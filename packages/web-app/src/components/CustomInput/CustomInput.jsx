// STYLES
import { Wrapper, Label, Title, WrapperInput } from "./CustomInput.styled";

// FUNCTION
const CustomInput = (props) => {
  const {
    type = "text",
    title,
    label,
    name,
    value,
    onChange,
    error,
    placeholder,
    disabled,
    maxLength,
    showCount,
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
          maxLength={maxLength}
        />
        {showCount && (
          <span>
            {value?.length ?? "0"} / {maxLength}
          </span>
        )}
      </WrapperInput>
      {label && <Label error={error}>{label}</Label>}
    </Wrapper>
  );
};

export default CustomInput;
