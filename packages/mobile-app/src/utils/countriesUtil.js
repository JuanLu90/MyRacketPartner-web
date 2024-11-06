import flags from "./flagsUtil";
import { countries } from "@myracketpartner/common";

export function getCountry(value) {
  if (!value) return;

  const countrySelected = countries?.find(
    (country) => country?.value === value,
  );

  return {
    name: countrySelected?.label,
    flag: flags[value],
  };
}
