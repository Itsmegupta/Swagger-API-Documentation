const swaggerJsDoc = require("swagger-jsdoc");

// Swagger definition
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Simple User API",
      version: "1.0.0",
      description: "A simple API to learn Swagger with Node.js and Express",
    },
    servers: [
      {
        url: "http://localhost:3939",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Points to API routes
};

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpecs;
