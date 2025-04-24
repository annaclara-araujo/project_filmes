import "./Lista.css";
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"
const Lista = () =>{
    return(
        <section className="layout_grid listagem">
            <h1>Lista dos Filmes</h1>
            <hr/>

        <div className="tabela">
            <table>
                {/*Cabecalho da tabela */}
                <thead>
                    {/* tr => Table row */}
                    <tr className="cabecalho">
                        <th>Nome</th>
                        <th>Genero</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {/* tbody =>corpo da tabela */}
                    <tr className="item_lista">
                        <td>Gente Grande</td>
                        <td>Comedia</td>
                        <td><img src={Editar} alt="Caneta"/></td>
                        <td><img src={Excluir} alt="Lixeira"/></td> 
                        
                    </tr>
                </tbody>
            </table>
        </div>
        </section>
    )
}

export default Lista;