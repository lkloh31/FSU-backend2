DROP TABLE IF EXISTS departments CASCADE;
DROP TABLE IF EXISTS faculties;
DROP TABLE IF EXISTS administrators;

CREATE TABLE departments (
  id serial PRIMARY KEY ,
  name text UNIQUE NOT NULL,
  banner_img text,
  description text NOT NULL
);

CREATE TABLE faculties (
  id serial PRIMARY KEY,
  name text NOT NULL,
  title text NOT NULL,
  sub_department text NOT NULL,
  profile_img text,
  bio text NOT NULL,
  email text NOT NULL,
  department_id int NOT NULL REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE administrators (
  id serial PRIMARY KEY,
  name text NOT NULL,
  username text UNIQUE NOT NULL,
  password text NOT NULL
);