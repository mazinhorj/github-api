import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VoltarBtn from "../components/VoltarBtn";
import Loader from "../components/Loader";
import { RepoProps } from "../types/repo";
import Repo from "../components/Repo";

import classes from "./Repos.module.css";

const Repos = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async function (username: string) {
      setIsLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const dados = await res.json();
      setIsLoading(false);
      let orderedRepos = dados.sort((a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count);
      orderedRepos = orderedRepos.slice(0, 5);
      setRepos(orderedRepos);
      console.log(dados);
    };

    if (username) {
      loadRepos(username);
    }
  }, []);

  if (!repos && isLoading) return <Loader />;

  return (
    <div className={classes.repos}>
      <VoltarBtn />
      <h2>Veja os repositórios de <span>{username}</span></h2>
      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <div className={classes.repos_container}>
          {repos.map((repo: RepoProps) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repos;
