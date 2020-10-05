const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const sessionsRouter = require("./routes/sessions");
const notificationsRouter = require("./routes/notifications");
const vehiclesRouter = require("./routes/vehicles");
const servicesRouter = require("./routes/services");
const promotionsRouter = require("./routes/promotions");
const bookingRouter = require("./routes/bookings");
const timeSlotRouter = require("./routes/timeSlots");
const unavailableDateRouter = require("./routes/unavailableDates");
const ratingRouter = require('./routes/rates');

const port = process.env.PORT || 4000;
console.log(port);
const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/notifications", notificationsRouter);
app.use("/vehicles", vehiclesRouter);
app.use("/bookings", bookingRouter);
app.use("/services", servicesRouter);
app.use("/promotions", promotionsRouter);
app.use("/timeslots", timeSlotRouter);
app.use("/sp/unavailabledates",unavailableDateRouter);
app.use("/rating",ratingRouter);

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database");
  }
);

app.listen(port, () =>
  console.log(`iRYDE backend listening at http://localhost:${port}`)
);

module.exports = app;
