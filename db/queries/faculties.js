import db from "#db/client";

export async function createFaculty(
  name,
  title,
  sub_department,
  profile_img,
  bio,
  email,
  department_id
) {
  const sql = `
  INSERT INTO faculties
    (name, title, sub_department, profile_img, bio, email, department_id)
  VALUES
    ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *
  `;
  const {
    rows: [admin],
  } = await db.query(sql, [
    name,
    title,
    sub_department,
    profile_img,
    bio,
    email,
    department_id,
  ]);
  return admin;
}


export async function getFaculties() {
  const sql = `
    SELECT *
    FROM faculties
    `;
  const { rows: faculties } = await db.query(sql);
  return faculties;
}

export async function getFacultyById() {}

export async function updateFaculty() {}

export async function deleteFaculty() {}
