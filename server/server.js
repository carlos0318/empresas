const express = require("express");
require('dotenv').config();
const app = express();
const cors = require('cors');
require('./models/connection');

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server funcionando");
});

app.use(express.json());
app.use("/empresas", require("./routes/empresas-routes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
