import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? css.statusOnline : css.statusOffline;
  return (
    <li className={css.item}>
      <span className={`${css.status} ${statusClass}`}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
