// DEPENDENCIES
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// REDUX
import { logout } from "store/slices/authSlice";

// STYLES
import { Separator } from "./MenuItems.styled";

// FUNCTION
const MenuItems = ({ id, toggleMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logoutAction = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul>
      {id ? (
        <>
          <li>
            <Link to="/suggestions" onClick={toggleMenu}>
              {t("HeaderMenu.Suggestions")}
            </Link>
          </li>
          <li>
            <Separator />
          </li>
          <li>
            <button onClick={logoutAction}>{t("HeaderMenu.Logout")}</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <button onClick={() => navigate("/login")}>
              {t("HeaderMenu.Login")}
            </button>
          </li>
          <li>
            <Separator />
          </li>
          <li>
            <button onClick={() => navigate("/register")}>
              {t("HeaderMenu.Signup")}
            </button>
          </li>
        </>
      )}
    </ul>
  );
};

export default MenuItems;
