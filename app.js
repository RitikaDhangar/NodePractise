const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const storeRoutes = require("./routes/store");
app.use(storeRoutes);

app.listen(8000);
