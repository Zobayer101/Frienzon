const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./server/routes/routes");
const app = express();
dotenv.config();
app.use(cors({ origin: "*" }));

const port = process.env.port || 800;
app.use(express.json({ limit: "50mb" }));
app.use('/route', router);

app.listen(port, () => {
  console.log(`server was run: http://localhost:${port}`);
});
