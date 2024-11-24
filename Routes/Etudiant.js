const express = require('express');
const router = express.Router();
const { signUpValidations , validator } = require('../Middleware/Validator');
const isAuth = require('../Middleware/isAuth');
const { signUp, signIn, deleteetudiant, resetPassword, resetUserName } = require('../Controllers/Etudiant');

router.post('/signUp', signUpValidations() , validator , signUp);
router.post('/signIn', signIn);
router.delete('/delete/:_id', deleteetudiant); 
router.put('/reset-password/:_id', resetPassword);
router.put('/reset-userName/:_id', resetUserName);
router.post("/current", isAuth, (req, res) => {
    res.status(200).send({ client: req.client });
});

module.exports = router;