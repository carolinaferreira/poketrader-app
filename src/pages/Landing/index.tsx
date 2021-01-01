import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Landing(){
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <h2>Sua plataforma de trocas online.</h2> 
        </div>
        <div className="buttons-container">
          <a href="" className="trade">
            Fazer troca
          </a>
          <Link to="/trades-history" className="trades-history">
            Histórico de trocas
          </Link>
        </div>
        <span className="total-trades">
          Total de 200 trocas já realizadas
        </span>
      </div>
    </div>
  )
}
export default Landing;