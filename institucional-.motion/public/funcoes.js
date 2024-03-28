function sendMail() {
    var nome = input_nome.value;
    var email = input_email.value;
    var mensagem = input_mensagem.value;

    if (nome == "" || email == "" ||mensagem == ""){
        alert("Campos Vazios!")

                var inputs = document.querySelectorAll("input");
                inputs.forEach(function (input) {
                    input.value = "";
                });
    } else {
    var form = {
        from: email,
        responsableName: nome,
        text: mensagem
    }
    fetch('/email/sendmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
        .then(() => {
            alert("E-mail Enviado")

                var inputs = document.querySelectorAll("input");
                inputs.forEach(function (input) {
                    input.value = "";
                });
        })
        .catch(() => {
            alert("Não foi possível enviar e-mail")

                var inputs = document.querySelectorAll("input");
                inputs.forEach(function (input) {
                    input.value = "";
                });
        });
}
}
