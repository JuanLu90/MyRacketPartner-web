import styled, { createGlobalStyle } from "styled-components";
import { colors } from "utils/stylesUtil";
export const Wrapper = styled.div`
  color: ${colors.white};
  min-height: 100vh;
  background-color: ${colors.primary};
`;

export const WrapperBody = styled.div`
  max-width: 800px;
  margin: auto;
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 60px);
  border: 2px solid ${colors.green};
  border-top: none;
  border-bottom: none;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props.loading ? "hidden" : "auto")};
  }
`;

export const BottomBlock = styled.div`
  height: 60px;
  border-top: 1px solid ${colors.green};
`;
