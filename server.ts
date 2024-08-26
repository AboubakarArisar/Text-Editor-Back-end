import express from "express";
import connect from "./connect";
import userRoutes from "./routes/user.routes";
import documentRoutes from "./routes/document.routes";
import commentRoutes from "./routes/comment.routes";
import shareRoutes from "./routes/share.routes";
import { PORT } from "./config/config";
const app = express();

const port = PORT;

app.use(express.json());

connect().then(() => {
  app.use("/users", userRoutes);
  app.use("/documents", documentRoutes);
  app.use("/comments", commentRoutes);
  app.use("/shares", shareRoutes);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});

app.get("/", (req, res) => {
  res.send("Text editor is live");
});
