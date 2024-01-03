import React from 'react'

import PageHeader from '../../components/PageHeader';

import starImg from '../../assets/images/star.png';
import goldStarImg from '../../assets/images/gold-star.png';

import './styles.css';


function Score(){

    return(
        <div id="page-score" className="container">
            <PageHeader title="Avalie sua aula" description="Como foi a aula com Fulano?">
                <div id="score">
                    
                    <img src={goldStarImg} width='20' height='20' alt="Proffy"/>
                    <img src={goldStarImg} width='20' height='20' alt="Proffy"/>
                    <img src={goldStarImg} width='20' height='20' alt="Proffy"/>
                    <img src={goldStarImg} width='20' height='20' alt="Proffy"/>
                    <img src={starImg} width='20' height='20' alt="Proffy"/>

                    <button type="submit">
                        Avaliar
                    </button>
                </div>
                
            </PageHeader>
            <main>
                <div id="content">
                    Obrigado por utilizar nossa plataforma!
                </div>
            </main>

        </div>
    )
}

export default Score;