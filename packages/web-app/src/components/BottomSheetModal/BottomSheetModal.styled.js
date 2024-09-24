import styled, { keyframes, createGlobalStyle } from "styled-components";
import { colors } from "utils/stylesUtil";

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
`;
export const SubWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const ModalBackground = styled.div`
  animation: ${(props) => props.isOpen && slideUp} 0.3s forwards;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: -webkit-fill-available;
  min-height: 250px;
  background: ${colors.primary};
  color: ${colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px;
  z-index: 2;

  @media (min-width: 768px) {
    /* tablet */
    bottom: auto;
    min-height: auto;
    border-radius: 20px;
  }

  @media (min-width: 1024px) {
    /* desktop */
    width: 50%;
    max-width: 500px;
  }
`;

export const Overlay = createGlobalStyle`
  body::after {
      content: "";
      display: ${(props) => (props.isOpen ? "block" : "none")};
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5);
      z-index: 3;
  }

  body {
      overflow: hidden;
  }
`;

export const WrapperChildren = styled.div`
  width: 100%;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
  padding: 10px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  outline: none;
  width: -webkit-fill-available;
`;

export const CancelButton = styled(Button)`
  margin-right: 10px;
  background-color: transparent;
  color: ${colors.greyLight};
  border: 1px solid ${colors.greyLight};
`;

export const SendButton = styled(Button)`
  background-color: ${colors.green};
  color: ${colors.primary};
  border: none;
`;
export const WrapperCloseIcon = styled.div`
  position: absolute;
  top: -15px;
  right: 30px;
  display: flex;
  align-items: center;
  width: 20px;
  padding: 15px;
  background-color: ${colors.primary};
  border: 1px solid ${colors.orange};
  border-radius: 5px;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: -webkit-fill-available;
`;

export const Title = styled.h1`
  margin: 0 0 20px 0;
`;
