import morgan from "morgan";
import express from "express";
const app = express();
export default app;

import getUserFromToken from "#middleware/getUserFromToken";
import adminRouter from "#api/admins";
import facultyRouter from "#api/faculties";
import deptRouter from "#api/departments";

// middleware
app.use(express.json());
app.use(morgan("dev"));

app.use(getUserFromToken);

// GET / to send the message "Hello Lincoln!"
app.route("/").get((req, res) => {
  res.send("Hello Lincoln!");
});

app.use("/admin", adminRouter);
app.use("/faculty", facultyRouter);
app.use("/departments", deptRouter);

app.use((err, req, res, next) => {
  switch (err.code) {
    // Invalid type
    case "22P02":
      return res.status(400).send(err.message);
    // Unique constraint violation
    case "23505":
    // Foreign key violation
    case "23503":
      return res.status(400).send(err.detail);
    default:
      next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});