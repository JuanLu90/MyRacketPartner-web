// DEPENDENCIES
import { useTranslation } from "react-i18next";

// STYLES
import { Wrapper, Title } from "./DropdownCountries.styled";
import { getCountryName } from "utils/countriesUtil";

// FUNCTION
const DropDownCountries = (props) => {
  const { handleChange, value, name, title, options } = props;

  const { t } = useTranslation();

  return (
    <Wrapper>
      {title && <Title> {title} </Title>}
      <select name={name} onChange={handleChange} value={value}>
        <option value={""}>No selected</option>
        {options.map((x) => {
          console.log(getCountryName(x?.code)?.name);
          return (
            <option key={x.code} value={x.code}>
              <img src={getCountryName("ES")?.name} alt="" />
              {t(x.name)}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

export default DropDownCountries;
