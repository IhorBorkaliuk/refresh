import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  margin-top: 30px;
  padding-top: 15px;
  background-color: rgb(210, 218, 216);
`;

export const Description = styled.div`
  text-align: center;
  font-size: 25px;
`;

export const Avatar = styled.img`
  display: block;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 40px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin: 15px 0px;
`;

export const Tag = styled.p`
  font-size: 20px;
  font-style: italic;
`;

export const Loc = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatsElement = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid black;
  width: 33.33%;
  padding: 12px;
  align-items: center;
  justify-content: center;
  background-color: #e8eaf1;
`;

export const Label = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const Quentity = styled.p`
  font-weight: 500;
  font-size: 24px;
  font-style: italic;
`;
