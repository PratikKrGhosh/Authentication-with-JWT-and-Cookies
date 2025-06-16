import { createUser, getUserByUserName } from "../services/user.service.js";

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

export const signin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const [user] = await getUserByUserName(userName);

    if (!user) return res.status(404).send("User Not Found");

    if (user.password !== password)
      return res.status(400).send("Wrong Password");

    res.status(200).redirect("/");
  } catch (err) {
    return res.status(404).send("Something went wrong");
  }
};

export const register = async (req, res) => {
  try {
    const { userName, name, email, password } = req.body;

    const [user] = await createUser({ userName, name, email, password });

    if (!user) return res.status(400).send("Could not create User!");

    return res.status(200).redirect("/sign");
  } catch (err) {
    return res.status(404).send("Something Went Wrong");
  }
};
