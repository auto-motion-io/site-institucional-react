const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'contatomotion.io@gmail.com',
        pass: 'wdtcqzxmawhsmcgc'
    }
});

function sendMail(form, res){
    transport.sendMail({
        from: `${form.from}`,
        to: 'contatomotion.io@gmail.com',
        subject: `Dúvida - Fomulário Site`,
        html: `
            <h1>Nome: ${form.responsableName}</h1>
            <p>E-mail: ${form.from}</p>
            <p>Mensagem: ${form.text}</p>
        `
    })
    .then(() => res.send("Email sent"))
    .catch((err) => console.log(err))
    sendMail2(form, res);
}

function sendMail2(form, res){
transport.sendMail({
    from: `${form.from}contatomotion.io@gmail.com`,
    to: `${form.from}`,
    subject: `Dúvida Recebida! - .motion`,
    html: `
    <p>Olá ${form.responsableName}, Sua dúvida foi <b>enviada e chegou até um de nossos atendentes .motion!</b> Aguarde e logo mais iremos entrar em contato para mais informações.
    </p>
    <p>Abraços.</p>
    <p><b>.motion, O motor da mudança</b></p>
    `
})
.then(() => res.send("Email sent"))
.catch((err) => console.log(err))
}



module.exports = {
    sendMail
}