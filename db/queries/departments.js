import db from "#db/client";

export async function createDepartment(name, banner_img, description) {
  const sql = `
    INSERT INTO departments
      (name, banner_img, description)
    VALUES
      ($1, $2, $3)
    RETURNING *
    `;
  const {
    rows: [department],
  } = await db.query(sql, [name, banner_img, description]);
  return department;
}

export async function getDepartments() {
  const sql = `
    SELECT *
    FROM departments
    `;
  const { rows: departments } = await db.query(sql);
  return departments;
}

export async function getDepartmentById(id) {
  const sql = `
    SELECT *
    FROM departments
    WHERE id = $1
    `;
  const {
    rows: [department],
  } = await db.query(sql, [id]);
  return department;
}

export async function updateDepartmentById(id, name, banner_img, description) {
  const sql = `
  UPDATE departments
  SET
    name = $2,
    banner_img = $3,
    description = $4
  WHERE id = $1
  RETURNING *
  `;
  const {
    rows: [department],
  } = await db.query(sql, [id, name, banner_img, description]);
  return department;
}

export async function deleteDepartmentById(id) {
  const sql = `
    DELETE FROM departments
    WHERE id = $1
    `;
  await db.query(sql, [id]);
}
