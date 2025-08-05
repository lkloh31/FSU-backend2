import db from "#db/client";

export async function getFaculties() {
  const sql = `
    SELECT *
    FROM faculties
    `;
  const { rows: faculties } = await db.query(sql);
  return faculties;
}

export async function getFacultyById() {}

export async function createFaculty() {}

export async function updateFaculty() {}

export async function deleteFaculty() {}
