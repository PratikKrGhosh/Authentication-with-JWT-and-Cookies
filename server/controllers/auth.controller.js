export const renderSignInPage = (req, res) => {
  try {
    res.status(200).render("sign");
  } catch (err) {
    return res.status(404).send("Page not Found");
  }
};

export const renderRegisterPage = (req, res) => {
  try {
    res.status(200).render("register");
  } catch (err) {
    return res.status(404).send("Page not Found");
  }
};
