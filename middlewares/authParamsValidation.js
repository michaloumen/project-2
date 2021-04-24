const validateParams = (req, res, next) => {
  const { username, password } = req.body;

  const usernameWithoutSpaces = username.trim();
  const passwordWithoutSpaces = password.trim();

  const isEmpty =
    !usernameWithoutSpaces.length || !passwordWithoutSpaces.length;

  if (isEmpty) {
    res.render("auth-views/signup", {
      usernameError: !usernameWithoutSpaces && "Nome de usuário obrigatório",
      passwordError: !passwordWithoutSpaces && "Senha obrigatória",
    });
    return;
  }

  const usernameNotMin = usernameWithoutSpaces.length < 5;
  const passwordNotMin = passwordWithoutSpaces.length < 6;
  const notMin = usernameNotMin || passwordNotMin;

  if (notMin) {
    res.render("auth-views/signup", {
      usernameError: usernameNotMin && "Mínimo de 5 caracteres",
      passwordError: passwordNotMin && "Mínimo de 6 caracteres",
    });
    return;
  }

  const usernameMax = usernameWithoutSpaces.length > 50;
  const passwordMax = passwordWithoutSpaces.length > 50;
  const max = usernameMax || passwordMax;

  if (max) {
    res.render("auth-views/signup", {
      usernameError: usernameMax && "Máximo de 50 caracteres",
      passwordError: passwordMax && "Máximo de 50 caracteres",
    });

    return;
  }

  next();
};

module.exports = validateParams;
