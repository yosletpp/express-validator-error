const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();

app.use(express.json());
app.post(
  "/",
  body("date").isDate({ format: "YYYY-MM-DD", strictMode: true }),
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.send(`Hello, ${req.body}!`);
    }

    res.send({ errors: result.array() });
  }
);

app.listen(3000);
