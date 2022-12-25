import classes from './User.module.css';

import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md";

import { Link } from 'react-router-dom';

const User = ({
  login,
  avatar_url,
  location,
  followers,
  following,
  public_repos,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
      <div>
        <p>Repositórios públicos:</p>
        <p>{public_repos}</p>
      </div>
      <Link to={`/repos/${login}`}>Top 5 repos</Link>
    </div>
  );
};

export default User;
