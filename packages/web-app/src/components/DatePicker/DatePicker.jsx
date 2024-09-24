// DEPENDENCIES
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// STYLES
import { Wrapper, Title, Label } from "./DatePicker.styled";

// FUNCTION
const DatePickerInput = (props) => {
  const { handleChange, value, title, label, error } = props;

  return (
    <Wrapper>
      {title && <Title> {title} </Title>}
      <DatePicker
        selected={value ? new Date(value) : new Date()}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        name="birthdate"
        wrapperClassName="datePicker"
      />
      {label && <Label error={error}>{label}</Label>}
    </Wrapper>
  );
};

export default DatePickerInput;
