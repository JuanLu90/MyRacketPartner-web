// DEPENDENCIES
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// STYLED
import {
  Wrapper,
  DominationHandIcon,
  BackhandIcon,
} from "./HandInfoBox.styled";

// COMMONS
import { types } from "@myracketpartner/common";

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
    types.getLabelForOptions(userInfo?.dominantHand, types.dominantHandOptions)
  );
  const backhandLabel = t(
    types.getLabelForOptions(userInfo?.backhand, types.backhandOptions)
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
