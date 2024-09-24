import styled from "styled-components";
import { colors } from "utils/stylesUtil";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 30px;
  background: linear-gradient(
    ${colors.greyDarkSemiTransparent},
    ${colors.primary}
  );
`;

export const UserProfileIcon = styled.img`
  height: 100px;
  border-radius: 100%;
  margin-bottom: 15px;
`;

export const NameInfo = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const UsernameInfo = styled.span`
  font-size: 16px;
`;
