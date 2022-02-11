import inventory from "src/routes/inventory.routes";
import ipdRoutes from "src/routes/ipd.routes";
import opdRoutes from "src/routes/opd.routes";
import hospitalRoutes from "src/routes/hospital.routes";
import express from "express";

const app = express();

export const initRoutes = () => {
  //router for inventory
  app.use("/api/v1/inventory", inventory);

  //router for ipd
  app.use("/api/v1/ipd", ipdRoutes);

  //router for opd
  app.use("/api/v1/opd", opdRoutes);

  //router for hospital
  app.use("/api/v1/hospital", hospitalRoutes);

  //router for application health check
  app.get("/ping", (_, res) => {
    res.status(200).send("pong");
  });
};

export default app;
