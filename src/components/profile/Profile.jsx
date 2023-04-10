import user from '../../user.json';
import { Discription } from 'components/decription/Discription';
import { Stats } from 'components/stats/Stats';

export const Profile = () => {
  const userFile = user;
  return (
    <div>
      <Discription {...userFile}></Discription>;<Stats {...userFile}></Stats>
    </div>
  );
};
