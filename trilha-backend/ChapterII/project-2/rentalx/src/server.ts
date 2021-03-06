// eslint-disable-next-line import/no-extraneous-dependencies
import express from "express";

import { categoriesRouter } from "./routes/categorie.route";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRouter);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("Server is running"));
