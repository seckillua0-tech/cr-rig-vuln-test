const express = require("express");
const app = express();
// post-trial probe: new SQLi marker line 2026-11-05
app.get("/q", (req,res) => { const q = req.query.q; res.send("SELECT * FROM t WHERE x = " + q); });
app.listen(3000);