import styled from "styled-components";
import { colors } from "myracketpartner-commons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 315px; */
  padding: 25px;
  /* background-color: #343a40; */
  color: #f8f9fa;
  /* border: 2px solid #3f4652; */
`;

export const Title = styled.span`
  margin: 0 auto;
  font-size: 35px;
  font-weight: bold;
  /* color: #b2b1b9; */
`;

export const Subtitle = styled.span`
  margin: 3px auto 25px auto;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.greyLight};
`;

export const SendInfoButton = styled.button`
  /* height: 40px; */
  margin: 30px auto 20px auto;
  padding: 5px 20px;
  background-color: ${colors.green};
  color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;

export const Registered = styled.span`
  margin-top: 50px;
  text-align: center;

  a {
    color: ${colors.green};
    text-decoration: none;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 16px;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;

  > img {
    width: 25px;
    margin-right: 15px;
  }
`;

export const GoogleButton = styled(Button)`
  background-color: ${colors.orange};
`;

export const Separator = styled.span`
  margin: 10px auto;
  color: ${colors.white};
`;

export const WrapperLoginRRSS = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
