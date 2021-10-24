const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
require("./models/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
