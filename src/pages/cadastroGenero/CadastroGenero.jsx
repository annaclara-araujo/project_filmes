import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

const CadastroGenero = () =>{
    return(
        <>
           <Header/>
           <main>
                <Cadastro tituloPagina="Cadastro de Genero"
                visibilidade = "none"
                placeholder = "genero"
                />
                
                <Lista tituloLista="Lista de Generos"
                visible="none"
                />
           </main>
           <Footer/>
       </> 
    )
}

export default CadastroGenero;