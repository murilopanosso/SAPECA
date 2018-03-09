import React from 'react';

export default props => {
    return (
        <div>
            <div>
                
                <div className="info"><strong>A - Construindo a armação</strong><br /></div>
                1 - Monte uma armação com área de 2m², sendo a largura definida com base da largura de trabalho do arrancador ou da recolhedora.<br /><br />
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
                </div>
                2 - Coloque a armação transversalmente sobre o solo.<br />
                <br />
                <div className="info"><strong>B - Contando as vagens - Arranquio</strong><br /></div>
                1 - Após a passagem do arrancador, retire cuidadosamente as plantas de amendoim de dentro da armação.<br />
                2 - Conte todas as vagens de 2 grãos que encontrar sobre o solo, dentro da área da armação. Elas corresponderão às perdas visíveis no arranquio.<br />
                <br />

                <div className="info"><strong>C - Contando as vagens - Recolhimento</strong><br /></div>
                1 - Após a passagem da recolhedora,  Conte todas as vagens de 2 grãos que encontrar sobre o solo, dentro da área da armação. Elas corresponderão às perdas visíveis totais (arranquio + recolhimento).<br />
                <br />
                <div className="info"><strong>D - Preenchenco os dados</strong><br /></div>
                1 - Selecione a variedade.<br />
                2 - Selecione a operação a ser avaliada.<br />
                3 - Selecione o tipo de perdas a ser avaliada.<br />
                4 - Digite o número de vagens encontradas dentro da área da armação.<br />
                5 - Digite o valor da saca de amendoim.<br />
                6 - Clique em AVALIAR.<br />
            </div>
        </div>
    );
}