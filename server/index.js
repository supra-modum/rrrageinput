/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
const app = express();

app.use(express.static("dist"));

// eslint-disable-next-line no-undef
app.listen(3000, () => console.log("Listening on port 3000!"));
