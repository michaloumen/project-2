const router = require('express').Router();

const isAuthDentist = require('../middlewares/verifyAuthDentist.middlewar');
const AuthPatientController = require('../controllers/auth.controller');

router.get('/signup', (req, res) => res.render('auth-views/signup'));

router.get('/dentist/signup', (req, res) => res.render('auth-views/dentistAuth'));
router.post('/dentist/signup', async (req, res, next) => {
  await isAuthDentist(req, res, next);
  res.render('auth-views/signup')
});

router.post('/signup', async () => await AuthPatientController.postCreateNewUser);

router.get('/login', (req, res) => res.render('auth-views/login'));
router.post('/login', async () => await AuthPatientController.postLoginPatient);

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
