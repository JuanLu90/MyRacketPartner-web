// DEPENDENCIES
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// REDUX
import { editUserInfoAction } from "store/slices/usersSlice";

// COMPONENTS
import BottomSheetModal from "components/BottomSheetModal/BottomSheetModal";
import CustomInput from "components/CustomInput/CustomInput";
// import DropDownInput from "../../Generic/DropDownInput/DropdownInput";
// import { toastAction } from "../../../redux/slices/alertSlice";

// COMMONS
import { dates } from "@myracketpartner/common";

// FUNCTION
const EditPersonalInformationModal = (props) => {
  const { personalInfo, isOpen, closeModal } = props;

  const dispatch = useDispatch();

  const [state, setState] = useState({});
  const [errorState, setErrorState] = useState({});

  const validateState = () => {
    const { firstName, lastName } = state;
    const errors = {};

    if (firstName?.length > 40)
      errors.firstName = "First name max length 40 characteres";

    if (lastName?.length > 40)
      errors.lastName = "Last name max length 40 characteres";

    setErrorState(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleChangeBirthdate = (date) => {
    console.log(date);
    setState((prevState) => ({
      ...prevState,
      birthdate: dates.formatDateMySql(date),
    }));
  };

  const onSubmit = async () => {
    if (!validateState()) return;

    try {
      await dispatch(editUserInfoAction(state)).unwrap();
      // await dispatch(toastAction(response)).unwrap();
      closeModal();
    } catch (error) {
      // await dispatch(
      //   toastAction({ message: error.message, type: "ERROR" })
      // ).unwrap();
    }
  };

  useEffect(() => {
    const birthdateFormatted = new Date(personalInfo?.birthdate);

    setState({
      ...personalInfo,
      birthdate:
        personalInfo?.birthdate && dates.formatDateMySql(birthdateFormatted),
    });
  }, [personalInfo]);

  return (
    <BottomSheetModal
      title="Edit - Personal information"
      isOpen={isOpen}
      closeModal={closeModal}
      onSubmit={onSubmit}
      setState={setState}
      setErrorState={setErrorState}
    >
      <CustomInput
        title="First name:"
        label={errorState.firstName}
        placeholder="First name"
        name="firstName"
        value={state.firstName}
        onChange={handleChange}
        error={errorState.firstName}
      />
      <CustomInput
        title="Last name:"
        label={errorState.lastName}
        placeholder="Last name"
        name="lastName"
        value={state.lastName}
        onChange={handleChange}
        error={errorState.lastName}
      />
      {/* <CustomInput
        type="date"
        title="Birthdate"
        label={errorState.birthdate}
        name="birthdate"
        value={state.birthdate ? new Date(state.birthdate) : new Date()}
        onChange={handleChangeBirthdate}
        error={errorState.birthdate}
      /> */}

      {/* <DropDownInput
        title="Gender:"
        name="gender"
        handleChange={handleChange}
        options={genderOptions}
        value={state.gender}
      /> */}

      <span>Birthdate:</span>
      <DatePicker
        selected={state.birthdate ? new Date(state.birthdate) : new Date()}
        onChange={handleChangeBirthdate}
        dateFormat="dd/MM/yyyy"
        name="birthdate"
      />
    </BottomSheetModal>
  );
};

export default EditPersonalInformationModal;
