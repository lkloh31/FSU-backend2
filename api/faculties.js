import express from "express";
const facultyRouter = express.Router();
export default facultyRouter;

import { getFaculties } from "#db/queries/faculties";

facultyRouter.route("/").get(async (req, res) => {
  const faculties = await getFaculties();
  res.send(faculties);
});

// facultyRouter.param("id", async (req, res, next, id) => {
//     if(!/^\d+$/.test(id)) {
//     return res
//       .status(400)
//       .send("ID must be a positive integer");
//     }
//     const faculty = await getFacultyById(id);
//     if (!faculty) return res.status(404).send("Faculty not found.");

//     req.faculty = faculty;
//     next();
// });

// facultyRouter.route("/:id").get((req, res) => {
//     res.send(req.faculty)
// });

// facultyRouter.use(requireUser);

// createFaculty
