const userDatabase = require("../Database");

const logIn = (req, res) => {
  const { email, pw } = req.body;
  const userInfo = userDatabase.filter((item) => email === item.email)[0];
  console.log(userInfo);
};

module.exports = logIn;
