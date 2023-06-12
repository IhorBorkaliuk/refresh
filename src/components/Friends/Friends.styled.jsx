import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  height: 65px;
  border: 1px solid black;
`;

export const List = styled.ul`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  text-align: center;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 16px;
  margin-left: 16px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  border-radius: 7px;
`;

export const Avatar = styled.img`
  width: 50px;
`;

export const Name = styled.p`
  margin-left: 20px;
  font-size: 25px;
`;
