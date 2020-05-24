const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.options('*', cors());

require("./routes")(app);
require("./scripts/seed")();

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI ||
    "mongodb://localhost/orderup", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Start the API server
app.listen(PORT, () => {
    console.log(`API server now listening on port: ${PORT}`);
});