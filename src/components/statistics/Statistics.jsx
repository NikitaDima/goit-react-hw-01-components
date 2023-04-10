import statisticsData from '../../data.json';

import { StatList } from 'components/statList/StatList';

export const Statistics = () => {
  return (
    <section>
      <h2>Upload stats</h2>;
      <ul>
        {statisticsData.map(data => {
          return <StatList {...data}></StatList>;
        })}
      </ul>
    </section>
  );
};
