import styled from "@emotion/styled";

export const FeedbackWrapper = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const Button = styled.button`
  margin-left: 20px;
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: rgb(105, 105, 111);
  background: linear-gradient(0deg, #595961 0%, #4d4d4f 100%);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  :hover {
    background: rgb(0, 3, 255);
    background: linear-gradient(0deg, #3e3e3f 0%, #212122 100%);
  }
`;
