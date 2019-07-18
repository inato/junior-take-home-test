import cors from "cors";
import express from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./schema";

const app = express();
const port = 3001;

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => console.log(`Listening on port ${port}`));
