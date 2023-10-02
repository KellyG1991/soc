import { default as Express, Request, Response } from "express";
import { createServer } from "http";
import "reflect-metadata";
import { MongooseServer } from "../database/MongooseServer";
import { registerAllApiRoutes } from "../routes/apiRoutes";

const main = async () => {
  const [_mongodbServer] = await Promise.all([MongooseServer.connect()]);

  const app = Express();

  app.use(Express.json());

  registerAllApiRoutes(app);

  app.get("/api", async (req: Request, res: Response) => {
    return res.send("Backend");
  });
  const httpServer = createServer(app);

  const PORT = "3001";

  httpServer.listen({ port: PORT }, () => {
    console.log("Server started on port: ", PORT);
  });
};

main().catch((error) => {
  console.log(error);
});
