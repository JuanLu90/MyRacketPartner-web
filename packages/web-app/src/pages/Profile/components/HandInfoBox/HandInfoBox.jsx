// DEPENDENCIES
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// STYLED
import {
  Wrapper,
  DominationHandIcon,
  BackhandIcon,
} from "./HandInfoBox.styled";

// UTILS
import {
  dominantHandOptions,
  backhandOptions,
  getLabelForOptions,
} from "utils/typesUtil";

// FUNCTION
const HandInfoBox = ({ hand }) => {
  const { t } = useTranslation();

  const userInfo = useSelector((state) => state.users.userInfo);

  const displayHandCondition = (value1, value2) => {
    if (hand === "dominationHand") {
      return value1;
    } else if (hand === "backHand") {
      return value2;
    }
  };

  const dominantHandTitle = t("EditProfile.Player.DominantHand.Title");
  const backhandTitle = t("EditProfile.Player.Backhand.Title");

  const dominantHandLabel = t(
    getLabelForOptions(userInfo?.dominantHand, dominantHandOptions)
  );
  const backhandLabel = t(
    getLabelForOptions(userInfo?.backhand, backhandOptions)
  );

  return (
    <Wrapper>
      <span>
        {displayHandCondition(<DominationHandIcon />, <BackhandIcon />)}
      </span>
      <div>
        <span>{displayHandCondition(dominantHandTitle, backhandTitle)}</span>
        <span>{displayHandCondition(dominantHandLabel, backhandLabel)}</span>
      </div>
    </Wrapper>
  );
};

export default HandInfoBox;
