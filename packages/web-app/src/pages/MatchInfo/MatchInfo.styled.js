import styled from "styled-components";
import { colors } from "utils/stylesUtil";

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  background-color: ${colors.greyDarkSemiTransparent};
`;

export const WrapperPlayer = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  opacity: ${(props) => !props.winner && ".5"};

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 110px;
  }
`;

export const Result = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
  opacity: ${(props) => !props.winner && ".5"};
`;

export const WrapperOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Option = styled.div`
  display: inline-block;
  padding: 0 20px;
  line-height: 45px;
  width: 100%;
  text-align: center;

  ${(props) =>
    props.selected &&
    `background-color: ${colors.green}; color: ${colors.primary}; font-weight: bold`};
`;

export const UserDefaultIcon = styled.img`
  height: 4rem;
  margin-bottom: 8px;
  border-radius: 100%;
`;

export const WrapperResult = styled.div`
  position: relative;
`;

export const EditIcon = styled.img`
  position: absolute;
  top: -15px;
  right: -25px;
  width: 20px;
`;
