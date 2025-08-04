import db from "#db/client";

export async function getFaculies() {
  const sql = `
    SELECT *
    FROM faculties
    `;
  const { rows: faculties } = await db.query(sql);
  return faculties;
}

export async function createFaculty() {}

export async function updateFaculty() {}

export async function deleteFaculty() {}
