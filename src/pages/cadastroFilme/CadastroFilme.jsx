import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import api from "../../Services/services";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'

//import { Fragment } from "react";
const CadastroFilme = () => {

    // const [filme, setFilme] = useState("");
    //const [listarFilme,setListaFilme] = useState([]);

    const [listaGenero, setListaGenero] = useState([]);
    const [filme, setFilme] = useState("");
    const [genero, setGenero] = useState("");

    //funcao para trazer genero para meu select
    async function listarGenero() {
        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data);

        } catch (error) {
            console.log(error)
        }
    }
    
    function alerta(icone, mensagem) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
            //----------alertarAAAA SUCESSO--------------------------------------------
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: icone,
                title: mensagem
            });

    }

    async function cadastrarFilme(e) {
        e.preventDefault()
        if(filme.trim() !== ""){
            try{
                await api.post("filme" , {titulo: filme, idGenero: genero});
                alerta("success", "Sucesso! Cadastro realido com sucesso!")
                setFilme("");
                setGenero("");


            }catch(error) {
                console.log(error);
            }
        }
        
    }
    
    
    useEffect(() => {
        listarGenero()
    }, []);







    return (

        <>
            <Header />
            <main>
                <Cadastro tituloPagina="Cadastro de Filme"
                    placeholder="filme"

                    lista={listaGenero}

                    funcCadastro = {cadastrarFilme}

                    valorInput= {filme}
                    setValorInput ={setFilme}

                    valorSelect = {genero}
                    setValorSelect = {setGenero}


                //funcCadastro={cadastrarFilme}
                />

                <Lista tituloLista="Lista de Filmes" />
            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme;