const emailService = require('../services/services');

function sendMail(req, res){
    emailService.sendMail(req.body, res);
}

module.exports = {
    sendMail
}