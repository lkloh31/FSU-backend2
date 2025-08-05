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

export async function getFacultyById(id) {
  const sql = `
    SELECT *
    FROM faculty
    WHERE id = $1
    `;
  const {
    rows: [faculty],
  } = await db.query(sql, [id]);
  return faculty;
}

export async function updateFaculty(
  id,
  name,
  title,
  sub_department,
  profile_img,
  bio,
  email,
  department_id
) {
  const sql = `
  UPDATE faculties
  SET
    name = $2
    title = $3
    sub_department = $4
    profile_img = $5
    bio = $6
    email = $7
    department_id = $8
  WHERE id = $1
  RETURNING *
  `;
  const {
    rows: [faculty],
  } = await db.query(sql, [id,
  name,
  title,
  sub_department,
  profile_img,
  bio,
  email,
  department_id]);
  return faculty;
}

export async function deleteFaculty(id) {
  const sql = `
    DELETE FROM faculties
    WHERE id = $1
    `;
  await db.query(sql, [id]);
}
