import styled, { keyframes } from "styled-components";
import { colors } from "utils/stylesUtil";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const FullScreenCentered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

export const LoadingIcon = styled.div`
  border: 14px solid ${colors.orange};
  border-top: 14px solid ${colors.green};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${rotate} 1s linear infinite;
`;
