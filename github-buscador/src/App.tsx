import { Outlet } from "react-router-dom";

import { AiOutlineGithub } from 'react-icons/ai';

import classes from './App.module.css';



function App() {

  return (
    <div className={classes.app}>
      <h1>Github Buscador</h1>
      <p className={classes.logo_git}><AiOutlineGithub /></p>
      <Outlet />
    </div>
  )
}

export default App
