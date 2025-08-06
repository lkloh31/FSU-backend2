import requireUser from "#middleware/requireUser";
import requireBody from "#middleware/requireBody";
import express from "express";
const deptRouter = express.Router();
export default deptRouter;

import {
  getDepartments,
  getDepartmentById,
  updateDepartmentById,
  deleteDepartmentById,
  createDepartment,
} from "#db/queries/departments";
import { getFacultyByDepartmentId } from "#db/queries/faculties";

deptRouter
  .route("/")
  .get(async (req, res) => {
    const departments = await getDepartments();
    res.send(departments);
  })
  .post(
    requireUser,
    requireBody(["name", "banner_img", "description"]),
    async (req, res) => {
      const { name, description, banner_img } = req.body;
      const department = await createDepartment({
        name,
        banner_img,
        description,
      });
      res.status(201).send(department);
    }
  );

deptRouter.param("id", async (req, res, next, id) => {
  if (!/^\d+$/.test(id)) {
    return res.status(400).send("ID must be a positive integer");
  }
  const department = await getDepartmentById(id);
  if (!department) return res.status(404).send("Department not found.");
  
  req.department = department;
  next();
});

deptRouter
  .route("/:id")
  .get(async (req, res) => {
    res.send(req.department);
  })
  .put(
    requireUser,
    requireBody(["name", "description", "banner_img"]),
    async (req, res) => {
      const { id } = req.department.id;
      const { name, description, banner_img } = req.body;
      const department = await updateDepartmentById({
        id,
        name,
        description,
        banner_img,
      });
      res.send(department);
    }
  )
  .delete(requireUser, async (req, res) => {
    const { id } = req.department.id;
    const department = await deleteDepartmentById(id);
    res.sendStatus(204);
  });

deptRouter
  .route("/:id/faculties")
  .get(async (req, res) => {
    const id = req.department.id    
    const faculties = await getFacultyByDepartmentId(id);
    res.send(faculties)
  })