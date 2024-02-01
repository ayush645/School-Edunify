const express = require("express");
const cors = require("cors");
const schoolsRoutes = require("./routes/schools");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/api", schoolsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
