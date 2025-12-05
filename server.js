const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/api/agent", async (req, res) => {
  const { message } = req.body;

  // ตอบกลับแบบ bot ธรรมดา
  const reply = `ตอบกลับอัตโนมัติจาก Agenti AI: ${message}`;

  res.json({ reply });
});

app.listen(3000, () => {
  console.log("Agenti AI server running on http://localhost:3000");
});

