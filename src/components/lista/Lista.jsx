import "./Lista.css";
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"
const Lista = (props) =>{
    return(
        <section className="layout_grid listagem">
            <h1>{props.tituloLista}</h1>
            <hr/>

        <div className="tabela">
            <table>
                {/*Cabecalho da tabela */}
                <thead>
                    {/* tr => Table row */}
                    <tr className="table_cabecalho">
                        <th>Nome</th>
                        <th style={{display:props.visible}}>Genero</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {/* tbody =>corpo da tabela */}
                    <tr className="item_lista" >
                        <td data-cell="Nome">Gente Grande</td>
                        <td data-cell="Genero" style={{display:props.visible}}>Comedia</td>
                        <td data-cell="Editar"><img src={Editar} alt="Caneta"/></td>
                        <td data-cell="Excluir"><img src={Excluir} alt="Lixeira"/></td> 
                        
                    </tr>
                </tbody>
            </table>
        </div>
        </section>
    )
}

export default Lista;