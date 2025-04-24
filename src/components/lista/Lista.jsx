import "./Lista.css";

const Lista = () =>{
    return(
        <section>
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
                </tbody>
            </table>
        </div>
        </section>
    )
}

export default Lista;