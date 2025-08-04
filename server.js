import app from "#app";
import db from "#db/client";

const PORT = process.env.PORT ?? 3000;

const cors = require("cors");
app.use(cors({ origin: /localhost/ }));

await db.connect();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
