import { handleError } from "../utils/handleError.js";
import { createUser, getUser } from "./user.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  const { email } = req.body;

  const existingUser = await getUser({ body: { email }}, res);
  
  if (existingUser.length > 0 ) {
    return res.status(409).json({ error: "User already exists" });
  }

  try {
    await createUser(req, res);
  } catch (err) {
    handleError(err, res)
  }
};

export const signIn = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await getUser({ body: { email }}, res);

    if(user.length <= 0 ){
      return res.status(404).send("Couldn’t find your Account")
       
    }
    
    bcrypt.compare(password, user[0].password, (err, result) => {
      if (result) {
        res.send({ success: true, user: user });
      } else {
        res.send({ error: "Invalid email or password" });
      }
    });

  } catch (err) {
    handleError(err, res)
  }
};
