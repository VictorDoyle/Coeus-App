import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const authRequired = (req, res, next) => {
  // FIXME: add jwt validation
  const bearerHeader = req.headers["authorization"];
  console.log(bearerHeader)
  if (typeof bearerHeader !== "undefined") {


    const token = bearerHeader.split(" ")[1];
    jwt.verify(token, process.env.jwtsecret, function (err, payload) {
      console.log(payload)
      if (err) res.sendStatus(500);
      
      req.currentUser = payload.id;
      next();
    });
  } else {
    res.sendStatus(403);
  }
};

export default authRequired



