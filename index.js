const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./docs/swaggerConfig");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
const PORT = 3939;

app.use(cors()); // Enable CORS
// Middleware to parse JSON
app.use(express.json());

// Swagger UI setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use("/api/users", userRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Swagger API Documentation Example!");
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
