import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li className="item" key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
