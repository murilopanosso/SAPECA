import React, {Component} from 'react';

class AboutTeam extends Component {


    render() {
        return (
            <div className="info">
                <br />
                <strong>SAPECA<br />
                Sistema de Avaliação de Perdas na Colheita de Amendoim </strong><br /> <br />
                Este aplicativo foi desenvolvido pela equipe do Laboratório de Máquinas e Mecanização Agrícola (LAMMA) da FCAV/UNESP - Jaboticabal, em parceria com o corpo técnico o Centro Universitário de Patos de Minas (UNIPAM).
                <br /><br />
                <strong>Equipe LAMMA</strong><br />
                Prof. Dr. Rouverson Pereira da Silva<br />
                M. Sc. Adão Felipe dos Santos<br />
                Prof. Dr. Cristiano Zerbato<br /><br />

                <strong>Equipe UNIPAM</strong><br />
                Prof. José Corrêa Viana<br />
                Bacharel Mirian Camila da Silva<br />
                Graduando Kassius Antonio Ferraz<br /><br />
                
                <strong>Desenvolvimento</strong><br />
                Murilo Panosso<br /><br /><br />
                <strong>Realização</strong><br /><br /><br />
                <div className="row">
                    <div className="col-md-6 lamma"></div>
                    <div className="col-md-6 unipam"></div>
                </div>
            </div>
        );
    }
}

export default AboutTeam