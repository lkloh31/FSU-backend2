import { getAdminById } from "#db/queries/administrators";
import { verifyToken } from "#utils/jwt";

export default async function getUserFromToken(req, res, next) {
  const authorization = req.get("authorization");
  if (!authorization || !authorization.startsWith("Bearer ")) return next();

  const token = authorization.split(" ")[1];
  try {
    const { id } = verifyToken(token);
    const user = await getAdminById(id);
    req.user = user;
    next();
  } catch {
    res.status(401).send("Invalid token.");
  }
}