const cep = document.querySelector("#ipt_cep");
const logradouro = document.querySelector("#ipt_logradouro");
const complemento = document.querySelector("#ipt_comp");
const bairro = document.querySelector("#ipt_bairro");
const cidade = document.querySelector("#ipt_cidade");
const estado = document.querySelector("#ipt_estado");
const mensagem = document.querySelector("#message_cep");

cep.addEventListener('focusout', async() => {
    try{
        const apenasNumeros = /^[0-9]+$/;
        const cepValido = /^[0-9]{8}$/;

        if(!cepValido.test(cep.value)){
            throw {cep_error: "Cep Invalido"}
        }

        const resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

        const respostaCep = await resposta.json();

        logradouro.value = respostaCep.logradouro;
        complemento.value = respostaCep.complemento;
        bairro.value = respostaCep.bairro;
        cidade.value = respostaCep.localidade;
        estado.value = respostaCep.uf;

    }catch(error){
        if(error?.cep_error){
            mensagem.textContent = error.cep_error;
            setTimeout(() => {
                mensagem.textContent = "";
            }, 5000)
        }
    }
})