import requireBody from "#middleware/requireBody";
import express from "express";
const adminRouter = express.Router();
export default adminRouter;

import { createToken } from "#utils/jwt";
import { createAdmin, getAdminByUsernameAndPassword } from "#db/queries/administrators";

adminRouter
    .route("/register")
    .post(requireBody(["name", "username", "password"]), async (req, res) => {
        const { name, username, password } = req.body;
        const admin = await createAdmin(name, username, password);

        const token = createToken({ id: admin.id });
        res.status(201).send(token);
    });

adminRouter
    .route("/login")
    .post(requireBody(["username", "password"]), async (req, res) => {
        const { username, password } = req.body;
        const admin = await getAdminByUsernameAndPassword(username, password);
        if (!admin) return res.status(401).send("Invalid username or password.");

        const token = await createToken({ id: admin.id });
        res.json(token);
    })