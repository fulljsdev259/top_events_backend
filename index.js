import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || "4000";
import schema from "./graphql/";
const db = "mongodb://root:12345678A@ds133876.mlab.com:33876/jamaicaevent";

// Connect to MongoDB with Mongoose.
mongoose
    .connect(
    db,
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));
app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT} and url is localhost:4000/graphql`));