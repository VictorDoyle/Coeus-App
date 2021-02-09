import jwt from "jsonwebtoken"

const authRequired = (req, res, next) => {
  // FIXME: add jwt validation
  const bearerHeader = req.headers["authorization"];
  console.log(bearerHeader)
  if (typeof bearerHeader !== "undefined") {


    const token = bearerHeader.split(" ")[1];
    jwt.verify(token, "secret key", function (err, payload) {
      if (err) res.sendStatus(500);

      req.currentUser = payload._id;
      next();
    });
  } else {
    res.sendStatus(403);
  }
};

export default authRequired



