import { useState, useEffect } from "react";

import api from "../../Services/services";

import Swal from 'sweetalert2'

//importação de componenets
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";


const CadastroGenero = () => {

    const [genero, setGenero] = useState("");
    const [listaGenero, setListaGenero] = useState([]);
    const [excluirGenero, setExcluirGenro] = useState();



    function alerta(icone, mensagem) {
        //----------ALERTAAAAA SUCESSO--------------------------------------------
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

        //----------FIM DO ALERTAAAA SUCESSO--------------------------------------

    }

    async function cadastrarGenero(evt) {
        evt.preventDefault();
        //verificar se o input esta vindo vazio
        // trim: apaga os espaços
        if (genero.trim() != "") {

            try {
                //cadastrar um genero: post
                await api.post("genero", { nome: genero });
                alerta("sucess", "Cadastro realizado com sucesso!")
                setGenero("");

            } catch (error) {
                alerta("error", "Erro! Entre em contato com o suporte!")
                console.log(error);
            }
        } else {
            alerta("error", "Preencha o campo!")
        }

        //try => tentar(o esperado)
        //catch => pega a exceção


    }

    //sincrono => Acontece simultaneamente
    //assincrono => esperar algo acontecer/ uma resposta

    async function listarGenero() {
        try {

            const resposta = await api.get("genero");
            //console.log(resposta.data);
            setListaGenero(resposta.data);

        } catch (error) {
            console.log(error);
        }
    }

    async function ExcluirGenero(params) {
        
    }






    //TESTE: validar o genero
    // useEffect(() => {
    //     console.log(genero);
    // },[genero]);
    //fim do teste

    //assim que a pagina redenrizar, o metodo listarGenero() sera chamado
    useEffect(() => {
        listarGenero();
    }, []);


    return (
        <>
            <Header />
            <main>
                <Cadastro tituloPagina="Cadastro de Gênero"
                    visibilidade="none"
                    placeholder="gênero"

                    //atribuindo a função:
                    funcCadastro={cadastrarGenero}
                    //atribuindo o valor do input:
                    valorInput={genero}
                    //atibuindo a função que atualiza o meu genero
                    setValorInput={setGenero}
                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visible="none"
                    //atribuir para lista, o meu estado atual
                    lista = {listaGenero}
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero;