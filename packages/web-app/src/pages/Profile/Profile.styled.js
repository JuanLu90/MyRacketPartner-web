import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperProfileInfo = styled.div`
  > h3 {
    margin: 20px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border-color: #ffffff;
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: #ffffff;
    color: #ffffff;
  }

  &:disabled {
    background-color: transparent;
    color: #6c757d;
    border-color: #6c757d;
    cursor: not-allowed;
  }
`;
