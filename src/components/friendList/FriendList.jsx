import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        const statusClass = friends.isOnline
          ? 'status--online'
          : 'status--offline';
        return (
          <li className="item" key={friend.id}>
            <span className={`status ${statusClass}`}></span>
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
