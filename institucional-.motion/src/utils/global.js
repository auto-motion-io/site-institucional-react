
export function verificaEmail(email){
    var regexEmail = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

    return regexEmail.test(email);
}

export const inputMascaraTelefoneCelular = (e) => {
    if (!e.target.value) return ""
    e.target.value = e.target.value.replace(/\D/g,'')
    e.target.value = e.target.value.replace(/(\d{2})(\d)/,"($1) $2")
    e.target.value = e.target.value.replace(/(\d)(\d{4})$/,"$1-$2")
}


export const inputMascaraCPF_CNPJ = (e) => {
    if (!e.target.value) return "";

    const valorFormatado = e.target.value.replace(/\D/g, '');

    if (valorFormatado.length === 14) {
        e.target.value = valorFormatado.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else if (valorFormatado.length === 18) {
        e.target.value = valorFormatado.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
}

export const inputMascaraCep = (e) => {
    if (!e.target.value) return "";

    const valorFormatado = e.target.value.replace(/\D/g, '');

    if (valorFormatado.length === 8) {
        e.target.value = valorFormatado.replace(/(\d{5})(\d{3})/, '$1-$2');
    }
}

