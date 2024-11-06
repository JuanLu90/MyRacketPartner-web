// DEPENDENCIES
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// REDUX
import { sendSuggestionsAction } from "store/slices/usersSlice.js";
// import { toastAction } from "../../redux/slices/alertSlice";

// STYLES
import {
  Wrapper,
  Title,
  Subtitle,
  TextAreaInput,
  WrapperCheckBox,
  StyledCheckbox,
  HiddenCheckbox,
  CreateSuggestionsButton,
  Label,
  WrapperInputArea,
} from "./Suggestions.styled.js";

// UTILS
import { validateSuggestions } from "utils/validationUtil.js";

// COMMONS
import { states } from "@myracketpartner/common";
import { useFormValidation } from "@myracketpartner/common";

// FUNCTION
const Suggestions = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { formState, setFormState, errors, handleChange, handleValidation } =
    useFormValidation(
      states.initialStateSuggestions,
      validateSuggestions,
      true
    );

  const onSubmit = async () => {
    const isValid = handleValidation();
    if (!isValid) return;

    try {
      await dispatch(sendSuggestionsAction(formState)).unwrap();
      setFormState(states.initialStateSuggestions);
      // await dispatch(
      //   toastAction({ message: response, type: "SUCCESS" })
      // ).unwrap();
    } catch (error) {
      console.log(error);
      // await dispatch(
      //   toastAction({ message: error.message, type: "ERROR" })
      // ).unwrap();
    }
  };

  return (
    <Wrapper>
      <Title> {t("Suggestions.Title")} </Title>
      <Subtitle>{t("Suggestions.Description")}</Subtitle>
      <WrapperInputArea>
        <TextAreaInput
          type="text"
          name="suggestions"
          value={formState.suggestions}
          onChange={handleChange}
          error={errors.suggestions}
          placeholder={t("Suggestions.PlaceholderTextArea")}
          // maxLength={300}
        />
        {errors.suggestions && (
          <Label error={errors.suggestions}>{errors.suggestions}</Label>
        )}
      </WrapperInputArea>

      <WrapperCheckBox>
        <StyledCheckbox checked={formState.shareSuggestion}>
          <HiddenCheckbox
            checked={formState.shareSuggestion}
            name="shareSuggestion"
            onClick={handleChange}
          />
        </StyledCheckbox>
        <span>{t("Suggestions.CheckboxShare")}</span>
      </WrapperCheckBox>
      <CreateSuggestionsButton onClick={onSubmit}>
        {t("Suggestions.SendButton")}
      </CreateSuggestionsButton>
    </Wrapper>
  );
};

export default Suggestions;
