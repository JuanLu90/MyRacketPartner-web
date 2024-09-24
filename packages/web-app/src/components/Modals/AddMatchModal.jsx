// DEPENDENCIES
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// REDUX
import {
  matchesAction,
  newMatchAction,
  editMatchAction,
  matchDetailsAction,
} from "store/slices/matchesSlice";

// COMPONENTS
import BottomSheetModal from "components/BottomSheetModal/BottomSheetModal";
// import CustomInput from "../../Generic/CustomInput/CustomInput";
import DatePickerInput from "components/DatePicker/DatePicker";

// HOOKS
import useSearchUsers from "hooks/useFetchUsers";

// STYLES
import {
  Wrapper,
  DateStyle,
  UsersWrapper,
  UserStyled,
  Result,
  UserDefaultIcon,
  InputResult,
  NotSelectedUser,
  PlusIcon,
  SearchUser,
  InputSearchUser,
  SearchUserResults,
  Option,
  OptionInfo,
  WrapperInfoResult,
  MinusIcon,
  SelectedUserIcon,
  WrapperErrorMessage,
  WarningIcon,
} from "./AddMatchModal.styled";
// import { toastAction } from "../../../redux/slices/alertSlice";

// IMAGES
import UserDefaultImg from "images/user-default.png";

// UTILS
import { validateAddResult } from "utils/validationUtil";
// import { formatDate, formatHour } from "utils/dateUtil";

const AddMatchModal = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { isOpen, closeModal, matchInfo } = props;

  const {
    user: { id, profileImage, username },
  } = useSelector((state) => state.auth);

  const isEditing = matchInfo?.user1?.id;

  const sets = [
    matchInfo?.sets[0] && { ...matchInfo?.sets[0] },
    matchInfo?.sets[1] && { ...matchInfo?.sets[1] },
    matchInfo?.sets[2] && { ...matchInfo?.sets[2] },
  ].filter(Boolean); // Filtrar los valores que son "undefined" o "false"

  const matchInfoInitialState = useMemo(
    () => ({
      matchID: matchInfo?.id,
      matchDate: matchInfo?.date ?? "2023-09-05 00:00:00",
      user1ID: matchInfo?.user1?.id ?? id,
      user2ID: matchInfo?.user2?.id,
      sets: [...sets],
      tournamentID: null,
    }),
    [id, matchInfo, sets]
  );

  const [selectUserisActive, setSelectUserisActive] = useState(false);
  const [userSelected, setUserSelected] = useState({});
  const [matchInfoState, setMatchInfoState] = useState(matchInfoInitialState);

  const [query, setQuery] = useState("");
  const [errors, setErrors] = useState([]);
  const { users, loading, error } = useSearchUsers(query);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const onSubmit = async () => {
    const validationErrors = validateAddResult(matchInfoState, t);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    try {
      if (isEditing) {
        await dispatch(editMatchAction(matchInfoState)).unwrap();
      } else {
        await dispatch(newMatchAction(matchInfoState)).unwrap();
      }
      if (isEditing) {
        dispatch(matchDetailsAction(matchInfo?.id)).unwrap();
      } else {
        dispatch(matchesAction()).unwrap();
      }
      closeModal();
    } catch (error) {
      // await dispatch(
      //   toastAction({ message: error.message, type: "ERROR" }),
      // ).unwrap();
    }
  };

  const handleChangeResult = (e, playerOrder) => {
    const {
      target: { value, name },
    } = e;

    setErrors([]);
    setMatchInfoState((prevState) => {
      const newSets = [...prevState.sets];
      newSets[name] = {
        ...prevState.sets[name],
        [`user${playerOrder}Score`]: value ? Number(value) : null,
      };
      if (
        newSets[name]?.user1Score === null &&
        newSets[name]?.user2Score === null
      ) {
        newSets.splice(name, 1);
      }
      return {
        ...prevState,
        sets: newSets,
      };
    });
  };

  const handleSelectUser = (user) => {
    setUserSelected(user);
    setMatchInfoState((prevState) => ({
      ...prevState,
      user2ID: user.userID,
    }));
    setSelectUserisActive(false);
    setErrors([]);
  };

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setMatchInfoState(matchInfoInitialState);
      setSelectUserisActive(false);
    }
  }, [isOpen, matchInfoInitialState]);

  useEffect(() => {
    setQuery("");
  }, [selectUserisActive]);

  const textInputGeneral = (value1, value2) => (
    <InputResult
      type="text"
      placeholder="0"
      name={value1}
      value={matchInfoState.sets[value1]?.[`user${value2}Score`] || ""}
      onChange={(e) => handleChangeResult(e, value2)}
      error={
        errors[0]?.code === value1 ||
        errors[0]?.code === 5 ||
        errors[0]?.code === 6 ||
        errors[0]?.code === 7
      }
      maxLength={1}
    />
  );

  return (
    <BottomSheetModal
      title={
        isEditing ? t("AddResultModal.TitleEdit") : t("AddResultModal.TitleAdd")
      }
      isOpen={isOpen}
      closeModal={closeModal}
      onSubmit={onSubmit}
      // setErrorState={setErrorState}
    >
      <Wrapper>
        <DateStyle>
          <span> {t("AddResultModal.MatchDate")}: </span>
          <DatePickerInput
          // value={userState.birthdate}
          // handleChange={handleChangeBirthdate}
          />
        </DateStyle>
        <WrapperInfoResult>
          <UsersWrapper>
            <UserStyled unfocus={selectUserisActive}>
              <UserDefaultIcon
                width={60}
                height={60}
                src={profileImage ?? UserDefaultImg}
              />
              <span>{username}</span>
            </UserStyled>
            <UserStyled>
              {userSelected?.userID || matchInfoState?.user2ID ? (
                <>
                  <SelectedUserIcon
                    width={60}
                    height={60}
                    src={
                      (matchInfoState?.user2ID &&
                        matchInfo?.user2?.profileImage) ??
                      userSelected?.profileImage ??
                      UserDefaultImg
                    }
                  />
                  <MinusIcon onClick={() => handleSelectUser({})} />
                </>
              ) : (
                <NotSelectedUser
                  onClick={() => setSelectUserisActive(!selectUserisActive)}
                  error={errors[0]?.code === 4}
                >
                  <PlusIcon error={errors[0]?.code === 4} />
                </NotSelectedUser>
              )}
              <span>
                {matchInfo?.user2?.name ??
                  userSelected?.userName ??
                  t("AddResultModal.AddPlayer")}
              </span>
            </UserStyled>
          </UsersWrapper>
          {!selectUserisActive ? (
            <Result>
              <div>
                {textInputGeneral(0, 1)}
                {textInputGeneral(0, 2)}
              </div>
              <div>
                {textInputGeneral(1, 1)}
                {textInputGeneral(1, 2)}
              </div>
              <div>
                {textInputGeneral(2, 1)}
                {textInputGeneral(2, 2)}
              </div>
            </Result>
          ) : (
            <SearchUser>
              <InputSearchUser
                placeholder={t("AddResultModal.SearchBy")}
                onChange={handleChange}
              />
              <SearchUserResults>
                {users.length > 0 &&
                  query &&
                  users?.map((user) => (
                    <Option
                      onClick={() => handleSelectUser(user)}
                      key={user.userID}
                    >
                      <UserDefaultIcon
                        width={30}
                        src={user.profileImage ?? UserDefaultImg}
                      />
                      <OptionInfo>
                        <span>
                          {user.firstName ?? user.userName} {user.lastName}
                        </span>
                        <span> {user.email}</span>
                      </OptionInfo>
                    </Option>
                  ))}
                {(!users.length || !query) && (
                  <span>{t("AddResultModal.NoUsers")}</span>
                )}
              </SearchUserResults>
            </SearchUser>
          )}
        </WrapperInfoResult>
      </Wrapper>
      <WrapperErrorMessage>
        {errors.length > 0 && (
          <div>
            <WarningIcon /> {errors[0]?.message}
          </div>
        )}
      </WrapperErrorMessage>
    </BottomSheetModal>
  );
};

export default AddMatchModal;
