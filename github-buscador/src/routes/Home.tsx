// componentes
import Busca from "../components/Busca";
import User from "../components/User";
import Error from "../components/Error";

// types
import { UserProps } from "../types/user";

// hooks
import { useState } from "react";
import Loader from "../components/Loader";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (userName: string) => {
    setIsLoading(true);
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const dados = await res.json();

    setIsLoading(false);

    if (res.status === 404) {
      setError(true);
      return;
    }

    console.log(dados);

    const { avatar_url, login, location, followers, following, public_repos } = dados;
    const userDados: UserProps = {
      avatar_url,
      login,
      location,
      following,
      followers,
      public_repos,
    };

    setUser(userDados);
  };

  return (
    <div>
      <Busca loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
