import {
  StatisticsStyle,
  StatList,
  Label,
  Element,
  Percentage,
} from './Styled.Statistics';

export default function Statistics({ stats, title }) {
  return (
    <StatisticsStyle>
      {title && <h2>{title}</h2>}
      <StatList>
        {stats.map(el => {
          return (
            <Element key={el.id}>
              <Label>{el.label}</Label>
              <Percentage>{el.percentage}%</Percentage>
            </Element>
          );
        })}
      </StatList>
    </StatisticsStyle>
  );
}

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
