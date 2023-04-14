const express = require("express");
const app = express();
const cors = require("cors");
const { db, Timestamp } = require("./firebase.js");

const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  try {
    const data = await db.collection("expense").get();
    let expenses = [];
    data.forEach((dt) => {
      const date = dt.data().date["_seconds"] * 1000;
      const newDate = new Date(date);
      expenses.push({
        ...dt.data(),
        date: newDate,
      });
    });
    console.log(expenses);
    res.json(expenses);
  } catch (err) {
    console.log(err);
  }
});

app.post("/addExpense", async (req, res) => {
  console.log(req.body);
  try {
    const expID = await db.collection("expense").add({
      ...req.body,
      date: Timestamp.fromDate(new Date(req.body.date)),
    });

    return res.json({
      msg: "expenses added!",
      id: expID,
    });
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
