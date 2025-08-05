import requireUser from "#middleware/requireUser";
import requireBody from "#middleware/requireBody";
import express from "express";
const deptRouter = express.Router();
export default deptRouter;

import { getDepartments, getDepartmentById } from "#db/queries/departments";

deptRouter.route("/").get(async (req, res) => {
  const departments = await getDepartments();
  res.send(departments);
});
// .post(requireUser, requireBody(["name", "description"]), async (req, res) => {
//     const { name, description } = req.body;
//     const department = await createDepartment(

//     )
// })

deptRouter.param("id", async (req, res, next, id) => {
  if (!/^\d+$/.test(id)) {
    return res.status(400).send("ID must be a positive integer");
  }
  const department = await getDepartmentById(id);
  if (!department) return res.status(404).send("Department not found.");

  req.department = department;
  next();
});

deptRouter.route("/:id/:name").get(async (req, res) => {
  res.send(req.department);
});

deptRouter.use(requireUser);

// createDepartment
// updateDepartmentById
