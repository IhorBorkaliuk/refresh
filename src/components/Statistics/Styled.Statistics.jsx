import styled from '@emotion/styled';
import { getRandomHexColor } from './Statistics';

export const StatisticsStyle = styled.section`
  width: 420px;
  margin: 40px auto;
  text-align: center;
  background-color: white;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 400;
  display: block;
  height: 25px;
  margin-bottom: 10px;
`;

export const Element = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  background-color: ${getRandomHexColor};
  color: white;
  font-size: 20px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
