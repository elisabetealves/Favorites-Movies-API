const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        "Titulo": "Favorite Movies API",
        "Version": "1.0.0",
        "Mensagem": "Seja Bem-vindo a Favorite movies uma API para sua diversão"    
    })   
})

module.exports = router;