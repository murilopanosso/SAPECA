import React from 'react';

export default props => {
    return (
        <div>
            <div className="info ion-ios-book" />
            <div>
                <div className="info"><strong>PREENCHENDO OS DADOS</strong><br /></div>
                1 - Monte uma armação com área de 2m², sendo a largura definida com base da largura de trabalho do arrancador;<br />
                2 - Coloque - a transversalmente sobre a leira;<br />
                3 - Retire cuidadosamente as plantas de amendoin de dentro da armação;<br />
                4 - Colete somente as vagens de 2 (dois) grãos que se encontrar sobre o solo, essas serão consideradas como perdas visíveis.<br /><br />
                <div className="info"><strong>CONSTRUINDO A ARMAÇÃO</strong><br /><br /></div>
                <div  className="info">
                    <table align="center"> 
                        <thead>
                            <th ><strong>Largura do Arranquio</strong></th>
                            <th><strong>Armação</strong></th>
                        </thead>
                        <tbody>
                            <td>
                                <tr>1,80 m</tr>
                                <tr>3,60 m</tr>
                                <tr>5,40 m</tr>
                                <tr>7,20 m</tr>    
                            </td>
                            <td>
                                <tr>1,80 x 1,11 m</tr>
                                <tr>3,60 x 0,56 m</tr>
                                <tr>5,40 x 0,37 m</tr>
                                <tr>7,20 x 0,28 m</tr>  
                            </td>
                        </tbody>
                    </table>
                </div><br />
                <div className="info"><strong>AVALIANDO AS PERDAS</strong><br /></div>                
                Para estimar as perdas usando o aplicativo com confiabilidade, o valor R² dos modelos das equações geradas foi utilizado como parâmetro
            </div>
        </div>
    );
}