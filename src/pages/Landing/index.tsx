import React from 'react';
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
          <a href="" className="trades-history">
            Histórico de trocas
          </a>
        </div>
        <span className="total-trades">
          Total de 200 trocas já realizadas
        </span>
      </div>
    </div>
  )
}
export default Landing;