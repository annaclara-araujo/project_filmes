import { useState, useEffect } from "react";

import api from "../../Services/services";

import Swal from 'sweetalert2'

//importação de componenets
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Paginacao from "../../components/paginação/Paginação"

const CadastroGenero = () => {


    //So criamos useState quando precisamos guardar uma informação que muda 
    // e que o React precisa acompanhar
    //Quem eu vou manipular
    const [genero, setGenero] = useState("");
    const [listaGenero, setListaGenero] = useState([]);




    function alertar(icone, mensagem) {
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

        //----------FIM DO alertarAAA SUCESSO--------------------------------------

    }

    async function cadastrarGenero(evt) {
        evt.preventDefault();
        //verificar se o input esta vindo vazio
        // trim: apaga os espaços
        if (genero.trim() != "") {

            try {
                //cadastrar um genero: post
                await api.post("genero", { nome: genero });
                alertar("success", "Cadastro realizado com sucesso!")
                setGenero("");
                listarGenero();
            } catch (error) {
                alertar("error", "Erro! Entre em contato com o suporte!")
                console.log(error);
            }
        } else {
            alertar("error", "Preencha o campo!")
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

    async function deletarGenero(generoId) {
        try {

            Swal.fire({
                title: "Você tem certeza?",
                text: "Você não poderá reverter isso!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim, delete isso!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.delete(`genero/${generoId.idGenero}`);
                    Swal.fire({
                        title: "Deletado!",
                        text: "Genero deletado com sucesso!",
                        icon: "success"
                    });
                }
            });
            listaGenero();

        } catch (error) {
            console.log(error);
        }

    }

    async function editarGenero(genero) {
       console.log(genero);
       
        const { value: novoGenero } = await Swal.fire({
            title: "Edite seu gênero",
            input: "text",
            inputLabel: "Novo gênero",
            inputValue: genero.nome,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "O campo precisa estar preenchido!";
                }
            }
        });
        if (novoGenero) {
            try{
                console.log(genero.nome);
                console.log(novoGenero);
                api.put(`genero/${genero.idGenero}`,
                {nome: novoGenero});
                Swal.fire(`O genero modificado ${novoGenero}`);
            }catch(error){
                console.log(error);
                
            }
        }
    }



    //TESTE: validar o genero
    // useEffect(() => {
    //     console.log(genero);
    // },[genero]);
    //fim do teste

    //assim que a pagina redenrizar, o metodo listarGenero() sera chamado
    //arrow function - funcão anonimas

    //useEffect- é um Hoocks, analisa a situação e aplica o efeito a partir de uma alteração de estado

    //1* chama-se a função: o efeito que queremos que aconteça

    //2* chama-se po array de dependencia: o efeito acontece na primeira vez que a tela é montada
    /// ou quando for recarregada, com dependencia 
    useEffect(() => {
        listarGenero();//função
    }, [listarGenero]);//[dependecia]


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
                    lista={listaGenero}

                    funcExcluir={deletarGenero}
                    funcEditar={editarGenero}

                />

                <Paginacao />
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero;