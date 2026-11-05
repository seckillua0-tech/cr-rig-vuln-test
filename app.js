const express = require("express");
const app = express();
// probe line rate-test-A 2026-11-05
app.get("/q1", (req,res) => res.send("SELECT * FROM t1 WHERE x = " + req.query.q));
app.listen(3001);