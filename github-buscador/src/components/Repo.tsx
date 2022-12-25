import classes from "./Repo.module.css";
import { RepoProps } from "../types/repo";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";

const Repo = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) => {
  return (
    <div className={classes.repo}>
      <div>
        <h3>{name}</h3>
      </div>
      <p className={classes.language}>
        <BsCodeSlash />
        {language}
      </p>
      <div className={classes.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <div className={classes.repo_btn}>
        <a href={html_url} target="_blank">
          <span>Ver repositório</span>
          <RiGitRepositoryLine />
        </a>
      </div>
    </div>
  );
};

export default Repo;
