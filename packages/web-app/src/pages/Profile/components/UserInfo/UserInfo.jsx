// DEPENDENCIES
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// STYLED
import { Wrapper, CountryInfo } from "./UserInfo.styled";

// UTILS
import { calculateAge, formatDate } from "utils/dateUtil";
import { getCountryName } from "utils/countriesUtil";

// FUNCTION
const UserInfo = () => {
  const userInfo = useSelector((state) => state.users.userInfo);
  const { t } = useTranslation();

  const defaultValue = (value) => value ?? "-";

  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para cargar la información del país
    const fetchCountryData = async () => {
      if (userInfo?.country) {
        try {
          const data = await getCountryName(userInfo.country);
          setCountryData(data);
        } catch (error) {
          console.error("Error loading country data:", error);
          setCountryData(null);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [userInfo?.country]);

  return (
    <Wrapper>
      <div>
        <span>{t("Profile.Age")}</span>
        <span>
          {calculateAge(userInfo?.birthdate)} ({formatDate(userInfo?.birthdate)}
          )
        </span>
      </div>
      <div>
        <span>{t("Profile.Height")}</span>
        <span>
          {defaultValue(userInfo?.height)}
          {userInfo?.height && " cm"}
        </span>
      </div>
      <div>
        <span>{t("Profile.Weight")}</span>
        <span>
          {defaultValue(userInfo?.weight)}
          {userInfo?.weight && " kg"}
        </span>
      </div>
      <div>
        <span>{t("Profile.Country")}</span>
        <CountryInfo>
          <img
            src={countryData?.flag || "/path/to/default/flag.svg"} // Ruta a una bandera por defecto si no se encuentra la bandera
            alt={countryData?.name || "Country Flag"}
          />
          <span>{countryData?.name || "Country Name"}</span>
        </CountryInfo>
      </div>
    </Wrapper>
  );
};

export default UserInfo;
