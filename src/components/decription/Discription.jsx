import PropTypes from 'prop-types';

export const Discription = ({ username, tag, location, avatar }) => {
  return (
    <div>
      <img src={avatar} alt={username} />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  );
};

Discription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
