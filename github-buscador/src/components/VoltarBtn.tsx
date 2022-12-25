import classes from './VoltarBtn.module.css';

import { useNavigate } from 'react-router-dom';

const VoltarBtn = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className={classes.volta_btn} onClick={() => navigate(-1)}>Voltar</button>
    </>
  )
}

export default VoltarBtn