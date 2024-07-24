import styled from "styled-components";
import { colors } from "../../utils/stylesUtil";

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  background-color: ${colors.greyDarkSemiTransparent};
`;

export const WrapperPlayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  opacity: ${(props) => !props.winner && ".5"};
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
`;

export const OptionsCarousel = styled.ul`
  ${(props) => (!props.isStarted ? "display: flex;" : null)}

  white-space: nowrap;
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  border-bottom: 2px solid ${colors.green};
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
