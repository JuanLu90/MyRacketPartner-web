// DEPENDENCIES
import { Link } from "react-router-dom";

// STYLES
import {
  Wrapper,
  DateStyle,
  UsersWrapper,
  UserStyled,
  ResultStyled,
  Separator,
  Result,
  UserDefaultIcon,
} from "./Match.styled";

// IMAGES
import UserDefaultImg from "images/user-default.png";

// UTILS
import { formatDate, formatHour } from "utils/dateUtil";

// FUNCTION
const Match = ({ match }) => {
  const {
    matchID,
    matchWinner,
    user1ID,
    user2ID,
    user1ProfileImage,
    user1Name,
    user2Name,
    user2ProfileImage,
    sets,
    matchDate,
  } = match;

  return (
    <Link
      to={`/match/${matchID}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Wrapper>
        <div>
          <DateStyle>
            <span>{formatDate(matchDate)}</span>
            <span>{formatHour(matchDate)}</span>
          </DateStyle>
          <Separator />
          <UsersWrapper>
            <UserStyled winner={matchWinner === user1ID}>
              <UserDefaultIcon src={user1ProfileImage ?? UserDefaultImg} />
              {user1Name}
            </UserStyled>
            <UserStyled winner={matchWinner === user2ID}>
              <UserDefaultIcon src={user2ProfileImage ?? UserDefaultImg} />
              {user2Name}
            </UserStyled>
          </UsersWrapper>
          <Result>
            {sets.map((set) => {
              return (
                <div key={set.setID}>
                  <ResultStyled winner={set.user1Score > set.user2Score}>
                    {set.user1Score}
                  </ResultStyled>
                  <ResultStyled winner={set.user1Score < set.user2Score}>
                    {set.user2Score}
                  </ResultStyled>
                </div>
              );
            })}
          </Result>
        </div>
      </Wrapper>
    </Link>
  );
};

export default Match;
