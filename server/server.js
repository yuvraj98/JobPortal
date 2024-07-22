const express = require("express");
const {connectDB} = require("./config/database.js");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute.js");
const companyRoute = require("./routes/companyRoute.js");
const jobRoute = require("./routes/jobRoute.js");
const applicationRoute = require("./routes/applicationRoute.js");

dotenv.config();

// Connect to the database
connectDB();

const PORT = process.env.PORT || 8080;
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
