import db from "#db/client";
import { createFaculty } from "./queries/faculties";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const departments = [
    { name: "Fire Nation" },
    { name: "Water Tribe" },
    { name: "Air Nomads" },
    { name: "Earth Kingdom" },
  ];

  const faculties = [
    {
      name: "Master Zuko, Conflict Resolution & Honor Studies",
      title: "Associate Professor",
      sub_department: "Department of Pyrology",
      bio: "Once banished for honor, now lectures on it. Specializes in identity conflict, redemption arcs, and brooding effectively under pressure.",
      email: "zhao@elementaluni.edu",
      department_id: 1,
    },
    {
      name: "Master Iroh, Tea Philosophy and Interdisciplinary Peace",
      title: "Professor Emeritus",
      sub_department: "Department of Pyrology",
      bio: "Sharing tea with a stranger is one of life’s true delights. Known for spiritual wisdom, tactical brilliance, and never missing a steep time.",
      email: "iroh@elementaluni.edu",
      department_id: 1,
    },
    {
      name: "Master Katara",
      title: "Head of Department, Healing Arts & Resistance Theory",
      sub_department: "Department of Hydromancy",
      bio: "Master of both waterbending and breaking the patriarchy. Leads with empathy, defends with precision, and never forgets the mission.",
      email: "katara@elementaluni.edu",
      department_id: 2,
    },
    {
      name: "Master Pakku",
      title: "Senior Lecturer, Traditional Forms and Cultural Preservation",
      sub_department: "Department of Hydromancy",
      bio: "Strict adherence to ancient customs—until out-argued by a teenager. Keeps tradition sharp, cold, and highly disciplined.",
      email: "pakku@elementaluni.edu",
      department_id: 2,
    },
    {
      name: "Mater Aang",
      title: "Distinguished Professor, Elemental Balance & Nonviolent",
      sub_department: "Department of Geomancy",
      bio: "Avatar, mediator, and reluctant essay grader. Still learning, still flying.",
      email: "aang@elementaluni.edu",
      department_id: 3,
    },
    {
      name: "Master Gyatso",
      title: "Chair of Spiritual Development & Aerodynamic Pastries",
      sub_department: "Department of Geomancy",
      bio: "Serious about peace, unserious about rules. Believed joy was part of training—and dessert a form of enlightenment.",
      email: "gyatso@elementaluni.edu",
      department_id: 3,
    },
    {
      name: "Master Toph",
      title: "Adjunct Professor, Seismic Combat & Truth Detection",
      sub_department: "Department of Aeromysticism",
      bio: "Seeing more than you ever will. Invented metalbending, specializes in calling out lies and breaking the floor underneath them.",
      email: "",
      department_id: 4,
    },
    {
      name: "King Bumi",
      title: "Professor of Unorthodox Strategy & Applied Madness",
      sub_department: "Department of Aeromysticism",
      bio: "Genius is knowing when to lick a rock. Courses include chaotic tactics, explosive strength, and laughing mid-battle.",
      email: "bumi@elementaluni.edu",
      department_id: 4,
    },
  ];

  const administrators = [{ username: "admin", password: "password" }];

  for (const department of departments) {
  }

  for (const faculty of faculties) {
    await createFaculty(faculty);
  }
}
