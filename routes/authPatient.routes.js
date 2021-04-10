const router = require('express').Router();
const AuthPatientController = require('../controllers/auth.controller');

router.get('/signup', (req, res) => res.render('auth-views/signup'));
router.post('/signup', AuthPatientController.postCreateNewUser);

router.get('/login', (req, res) => res.render('auth-views/login'));
router.post('/login', AuthPatientController.postLoginPatient);

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
