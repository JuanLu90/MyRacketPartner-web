import React, { useEffect, useState } from "react";
import BottomSheetModal from "../../Generic/BottomSheetModal/BottomSheetModal";
import CustomInput from "../../Generic/CustomInput/CustomInput";
import { editPlayerInfoAction } from "store/slices/usersSlice";
import { useDispatch } from "react-redux";
import { toastAction } from "store/slices/alertSlice";
import { backhandOptions, dominantHandOptions } from "utils/typesUtil";
// import DropDownInput from "../../Generic/DropDownInput/DropDownInput";

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
    let { name, value } = event.target;

    if (value === "No selected") {
      value = null;
    }

    setState((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    if (!validateState()) return;

    try {
      const response = await dispatch(editPlayerInfoAction(state)).unwrap();
      await dispatch(toastAction(response)).unwrap();
      closeModal();
    } catch (error) {
      await dispatch(
        toastAction({ message: error.message, type: "ERROR" })
      ).unwrap();
    }
  };

  useEffect(() => {
    setState(personalInfo);
  }, [personalInfo]);

  return (
    <BottomSheetModal
      title="Edit - Player information"
      isOpen={isOpen}
      closeModal={closeModal}
      onSubmit={onSubmit}
      setState={setState}
      setErrorState={setErrorState}
    >
      <CustomInput
        title="Player name:"
        label={errorState.playerName}
        placeholder="PlayerName"
        name="playerName"
        value={state.playerName}
        onChange={handleChange}
        error={errorState.playerName}
      />
      {/* 
      <DropDownInput
        title="Dominant Hand:"
        name="dominantHand"
        handleChange={handleChange}
        options={dominantHandOptions}
        value={state.dominantHand}
      />

      <DropDownInput
        title="Backhand:"
        name="backhand"
        handleChange={handleChange}
        options={backhandOptions}
        value={state.backhand}
      /> */}
    </BottomSheetModal>
  );
};

export default EditPersonalInformationModal;
