const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/product");

const app = express();

const port = 4200;

const corsOptions = {
  origin: ["http://localhost:3000", "https://www.google.com"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", productRouter);

app.get("/", (req, res) => {
  res.send("Hello, its working");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
