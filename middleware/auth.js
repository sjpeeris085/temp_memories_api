import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    // Validate user token in the request heading
    // [1] mean token is first position in the slitted array
    const token = req.headers.authorization.split(" ")[1];
    // Since we are use both google and custom login system we should identify as belows.
    const isCustomAuth = token.length < 500;
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "secret_key_xyz");
      req.userId = decodedData?.id;
    } else {
      // google auth
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
