import db from "#db/client";

export async function createAdmin(name, username, password) {
  const sql = `
  INSERT INTO administrators
    (name, username, password)
  VALUES
    ($1, $2, $3)
  RETURNING *
  `;
  const {
    rows: [admin],
  } = await db.query(sql, [name, username, password]);
  return admin;
}

export async function getAdminById(id) {
  const sql = `
    SELECT *
    FROM administrators
    WHERE id = $1
    `;
  const {
    rows: [admin],
  } = await db.query(sql, [id]);
  return admin;
}

export async function getAdminByUsernameAndPassword(username, password) {
  const sql = `
  SELECT *
  FROM administrators
  WHERE username = $1
  `;
  const {
    rows: [admin],
  } = await db.query(sql, [username]);
  if (!admin) return null;

  const isValid = await bcrypt.compare(password, admin.password);
  if (!isValid) return null;

  return admin;
}
