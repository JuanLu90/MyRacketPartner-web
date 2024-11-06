// DEPENDENCIES
import { useState } from "react";
import BottomSheetModal from "../../Generic/BottomSheetModal/BottomSheetModal";
import CustomInput from "../../Generic/CustomInput/CustomInput";
import { validatePassword } from "utils/validationUtil";
import { useDispatch } from "react-redux";
import { changePasswordAction } from "store/slices/authSlice";
import { toastAction } from "store/slices/alertSlice";

// FUNCTION
const ChangePasswordModal = (props) => {
  const dispatch = useDispatch();

  const initialCredentials = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const { isOpen, closeModal } = props;

  const [credentials, setCredentials] = useState(initialCredentials);
  const [errorState, setErrorState] = useState({});

  const validateChangePassword = () => {
    const { currentPassword, newPassword, confirmNewPassword } = credentials;
    const errors = {};

    if (!currentPassword)
      errors.currentPassword = "Current password is required";
    else if (!validatePassword(newPassword))
      errors.currentPassword = "Enter a valid currentPassword.";

    if (!newPassword) errors.newPassword = "New password is required";
    else if (!validatePassword(newPassword))
      errors.newPassword = "Enter a valid newPassword.";

    if (!confirmNewPassword)
      errors.confirmNewPassword = "confirmNewPassword is required";
    else if (!validatePassword(confirmNewPassword))
      errors.confirmNewPassword = "Enter a valid confirmNewPassword.";

    if (confirmNewPassword !== newPassword)
      errors.confirmNewPassword = "Confirm password doesn't match";

    setErrorState(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    if (!validateChangePassword()) return;

    try {
      const response = await dispatch(
        changePasswordAction(credentials)
      ).unwrap();

      await dispatch(
        toastAction({ message: response, type: "SUCCESS" })
      ).unwrap();

      closeModal();
    } catch (error) {
      await dispatch(
        toastAction({ message: error.message, type: "ERROR" })
      ).unwrap();
    }
  };

  return (
    <BottomSheetModal
      title="Change Password"
      isOpen={isOpen}
      closeModal={closeModal}
      onSubmit={onSubmit}
      setErrorState={setErrorState}
    >
      <CustomInput
        type="password"
        label={errorState.currentPassword}
        placeholder="Current Password"
        name="currentPassword"
        value={credentials.currentPassword}
        onChange={handleChange}
        error={errorState.currentPassword}
      />

      <CustomInput
        type="password"
        label={errorState.newPassword}
        placeholder="New Password"
        name="newPassword"
        value={credentials.newPassword}
        onChange={handleChange}
        error={errorState.newPassword}
      />

      <CustomInput
        type="password"
        label={errorState.confirmNewPassword}
        placeholder="Confirm Password"
        name="confirmNewPassword"
        value={credentials.confirmNewPassword}
        onChange={handleChange}
        error={errorState.confirmNewPassword}
      />
    </BottomSheetModal>
  );
};

export default ChangePasswordModal;
