import styled from "styled-components";
import { colors } from "myracketpartner-commons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  color: #f8f9fa;

  a {
    color: ${colors.green};
    text-decoration: none;
    margin: 10px 0 0 auto;
  }
`;

export const Title = styled.span`
  margin: 0 auto;
  font-size: 35px;
  font-weight: bold;
`;

export const Subtitle = styled.span`
  margin: 3px auto 25px auto;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.greyLight};
`;

export const SendInfoButton = styled.button`
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

export const Logged = styled.span`
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
    margin-right: 15px;
    width: 25px;
  }
`;

export const GoogleButton = styled(Button)`
  background-color: ${colors.orange};
`;

export const FacebookButton = styled(Button)`
  background-color: ${colors.blue};
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
