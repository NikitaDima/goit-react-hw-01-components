import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        const statusClass = friend.isOnline
          ? css.statusOnline
          : css.statusOffline;
        return (
          <li className={css.item} key={friend.id}>
            <span className={`${css.status} ${statusClass}`}></span>
            <img
              className="avatar"
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
