import styled from "styled-components";

const Button = styled.div`
  background-color: white;
  height: ${(props) => props.Height || "100%"};
  width: ${(props) => props.Width};
  font-size: ${(props) => props.FontSize};
  color: black;
  border: 2px solid #ffac9d;
  cursor: pointer;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ffac9d;
  }
`;
export default Button;
