import express from "express";
const facultyRouter = express.Router();
export default facultyRouter;

import { createFaculty, deleteFaculty, getFaculties, updateFaculty } from "#db/queries/faculties"
import requireUser from "#middleware/requireUser";
import requireBody from "#middleware/requireBody";

facultyRouter.route("/").get(async (req, res) => {
    const faculties = await getFaculties();
    res.send(faculties)
})
.post(requireUser, requireBody(["name", "title", "sub_department", "profile_img", "bio", "email", "department_id"]), async (req, res) => {
    const { name, title, sub_department, profile_img, bio, email, department_id } = req.body;
    const faculty = await createFaculty({
        name,
        title,
        sub_department,
        profile_img,
        bio,
        email,
        department_id
    });
    res.status(201).send(faculty)
})

facultyRouter.param("id", async (req, res, next, id) => {
    if(!/^\d+$/.test(id)) {
    return res
      .status(400)
      .send("ID must be a positive integer");
    }
    const faculty = await getFacultyById(id);
    if (!faculty) return res.status(404).send("Faculty not found.");

    req.faculty = faculty;
    next();
});

facultyRouter.route("/:id").get(async(req, res) => {
    res.send(req.faculty)
})
.put(requireUser, requireBody(["name", "title", "sub_department", "profile_img", "bio", "email", "department_id"]), async (req, res) => {
    const { id } = req.faculty.id
    const { name, title, sub_department, profile_img, bio, email, department_id } = req.body;
    const faculty = await updateFaculty({
        id,
        name,
        title,
        sub_department,
        profile_img,
        bio,
        email,
        department_id
    })
    res.send(faculty)
})
.delete(requireUser, async (req, res) => {
    const {id} = req.faculty.id;
    const faculty = deleteFaculty(id)
    res.sendStatus(204)
})