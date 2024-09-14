import jwt from "jsonwebtoken";

const JWT_KEY = process.env.JWT_KEY || "your_jwt_secret_key";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }

  jwt.verify(token, JWT_KEY, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid or expired" });
    }

    req.userId = payload.userId; // Attach userId to request object
    next(); // Proceed to the next middleware or route handler
  });
};
