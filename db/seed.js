import db from "./client.js";
import { createAdmin } from "./queries/administrators.js";
import { createDepartment } from "./queries/departments.js";
import { createFaculty } from "./queries/faculties.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const departments = [
    {
      name: "Fire Nation",
      banner_img: "",
      description: "Driven by ambition and passion, the Fire Nation department empowers students to harness their inner flame with discipline and purpose. Here, raw energy becomes refined power, shaped through leadership training, strategy, and self-mastery. The department encourages calculated risk-taking, innovation, and the courage to spark change where it’s needed most.",
    },
    {
      name: "Water Tribe",
      banner_img: "",
      description: "With a focus on adaptability and healing, the Water Tribe department teaches students to flow with life’s currents while nurturing both community and self. Through studies in cultural preservation, spiritual practices, and emotional intelligence, students are trained to restore, connect, and evolve. Empathy and flexibility are at the core of every lesson.",
    },
    {
      name: "Air Nomads",
      banner_img: "",
      description: "Rooted in endurance and tradition, the Earth Kingdom department values resilience, discipline, and a steady mind. Students learn to stand firm in their beliefs, navigate challenges with inner strength, and ground their decisions in reality. From seismic detection to diplomacy, our curriculum is designed to cultivate balance and unwavering resolve in both thought and action.",
    },
    {
      name: "Earth Kingdom",
      banner_img: "",
      description: "Dedicated to spiritual growth and freedom of thought, the Air Nomads department nurtures curiosity, peace, and non-attachment. Students explore philosophy, nonviolent intervention, and creativity through experiential learning. Light-hearted but wise, this department emphasizes personal enlightenment, harmony with nature, and the pursuit of joy.",
    },
  ];

  for (const department of departments) {
    await createDepartment(
      department.name,
      department.banner_img,
      department.description
    );
  }

  const faculties = [
    {
      name: "Master Zuko, Conflict Resolution & Honor Studies",
      title: "Associate Professor",
      sub_department: "Department of Pyrology",
      profile_img: "https://placeholdit.com/400x400/dddddd/999999",
      bio: "Once banished for honor, now lectures on it. Specializes in identity conflict, redemption arcs, and brooding effectively under pressure.",
      email: "zhao@elementaluni.edu",
      department_id: 1,
    },
    {
      name: "Master Iroh, Tea Philosophy and Interdisciplinary Peace",
      title: "Professor Emeritus",
      sub_department: "Department of Pyrology",
      profile_img: "https://placeholdit.com/400x400/dddddd/999999",
      bio: "Sharing tea with a stranger is one of life’s true delights. Known for spiritual wisdom, tactical brilliance, and never missing a steep time.",
      email: "iroh@elementaluni.edu",
      department_id: 1,
    },
    {
      name: "Master Katara",
      title: "Head of Department, Healing Arts & Resistance Theory",
      sub_department: "Department of Hydromancy",
      profile_img: "https://placeholdit.com/400x400/dddddd/999999",
      bio: "Master of both waterbending and breaking the patriarchy. Leads with empathy, defends with precision, and never forgets the mission.",
      email: "katara@elementaluni.edu",
      department_id: 2,
    },
    {
      name: "Master Pakku",
      title: "Senior Lecturer, Traditional Forms and Cultural Preservation",
      sub_department: "Department of Hydromancy",
      profile_img: "https://placeholdit.com/400x400/dddddd/999999",
      bio: "Strict adherence to ancient customs—until out-argued by a teenager. Keeps tradition sharp, cold, and highly disciplined.",
      email: "pakku@elementaluni.edu",
      department_id: 2,
    },
    {
      name: "Mater Aang",
      title: "Distinguished Professor, Elemental Balance & Nonviolent",
      sub_department: "Department of Geomancy",
      profile_img: "https://placeholdit.com/400x400/dddddd/999999",
      bio: "Avatar, mediator, and reluctant essay grader. Still learning, still flying.",
      email: "aang@elementaluni.edu",
      department_id: 3,
    },
    {
      name: "Master Gyatso",
      title: "Chair of Spiritual Development & Aerodynamic Pastries",
      sub_department: "Department of Geomancy",
      profile_img: "https://placeholdit.com/400x400/dddddd/999999",
      bio: "Serious about peace, unserious about rules. Believed joy was part of training—and dessert a form of enlightenment.",
      email: "gyatso@elementaluni.edu",
      department_id: 3,
    },
    {
      name: "Master Toph",
      title: "Adjunct Professor, Seismic Combat & Truth Detection",
      sub_department: "Department of Aeromysticism",
      profile_img: "https://placeholdit.com/400x400/dddddd/999999",
      bio: "Seeing more than you ever will. Invented metalbending, specializes in calling out lies and breaking the floor underneath them.",
      email: "beifong@elementaluni.edu",
      department_id: 4,
    },
    {
      name: "King Bumi",
      title: "Professor of Unorthodox Strategy & Applied Madness",
      sub_department: "Department of Aeromysticism",
      profile_img: "https://placeholdit.com/400x400/dddddd/999999",
      bio: "Genius is knowing when to lick a rock. Courses include chaotic tactics, explosive strength, and laughing mid-battle.",
      email: "bumi@elementaluni.edu",
      department_id: 4,
    },
  ];

  for (const faculty of faculties) {
    await createFaculty(
      faculty.name,
      faculty.title,
      faculty.sub_department,
      faculty.profile_img,
      faculty.bio,
      faculty.email,
      faculty.department_id
    );
  }

  const administrators = [
    { name: "superadmin", username: "admin", password: "password" },
  ];

  for (const administrator of administrators) {
    await createAdmin(
      administrator.name,
      administrator.username,
      administrator.password
    );
  }
}
