import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js";
const app = express()
const port = 3000
mongoose.connect("mongodb://localhost:27017/apilearn", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("Database Connected"));
app.use(express.json());
app.use('/notification', route);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})