export const StatList = ({ label, percentage }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
};
