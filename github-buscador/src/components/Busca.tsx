type BuscaProps = {
  loadUser: (userName: string) => Promise<void>;
};

import classes from './Busca.module.css';

import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs";

const Busca = ({ loadUser }: BuscaProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    };
  };

  return (
    <div className={classes.busca}>
      <h2>Buscar usuário:</h2>
      <p>Conheça seus melhores projetos/repositórios.</p>
      <div className={classes.busca_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Busca;
