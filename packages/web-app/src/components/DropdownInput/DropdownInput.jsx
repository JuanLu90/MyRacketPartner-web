// DEPENDENCIES
import { useTranslation } from "react-i18next";

// STYLES
import { Wrapper, Title } from "./DropdownInput.styled";

// FUNCTION
const DropDownInput = (props) => {
  const { handleChange, value, name, title, options } = props;

  const { t } = useTranslation();

  return (
    <Wrapper>
      {title && <Title> {title} </Title>}
      <select name={name} onChange={handleChange} value={value}>
        <option value={""}>No selected</option>
        {options.map((x, i) => {
          return (
            <option key={i} value={x.value}>
              {t(x.label)}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

export default DropDownInput;
