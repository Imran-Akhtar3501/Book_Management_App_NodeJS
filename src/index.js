require("dotenv").config();
const express = require("express");
const app = express();
const { connectToMongoDB, closeMongoDBConnection } = require("./db/connect");
const routes = require("./routes");
const swaggerHost = process.env.SWAGGER_HOST;


const port = process.env.PORT || 3000;
app.use("/", routes);

connectToMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on http://localhost:${port} 🚀🚀🚀`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

process.on("SIGINT", async () => {
  await closeMongoDBConnection();
  process.exit(0);
});
