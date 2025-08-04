DROP TABLE IF EXISTS faculties;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS administrators;


CREATE TABLE faculties (
  id serial PRIMARY KEY ,
  name text NOT NULL,
  title text NOT NULL,
  sub_department text NOT NULL,
  profile_img varbinary(max),
  bio text NOT NULL,
  email text NOT NULL,
  department_id int UNIQUE NOT NULL REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE departments (
  id serial PRIMARY KEY ,
  name text UNIQUE NOT NULL,
  banner_img varbinary(max),
  description text NOT NULL
);

CREATE TABLE administrators (
  id serial PRIMARY KEY,
  name text NOT NULL,
  username text UNIQUE NOT NULL,
  password text NOT NULL
);