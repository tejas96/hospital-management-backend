import inventory from "./inventory.routes";
import ipdRoutes from "./ipd.routes";
import opdRoutes from "./opd.routes";
import hospitalRoutes from "./hospital.routes";
import authUserRoutes from "./authUsers.routes";
import rfpROutes from "./rfp.routes";
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

  app.use("/api/v1/authUser", authUserRoutes);

  app.use("/api/v1/rfp", rfpROutes);

  //router for application health check
  app.get("/ping", (_, res) => {
    res.status(200).send("pong");
  });
};

export default app;
