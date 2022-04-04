import inventory from "./inventory.routes";
import ipdOpdRoutes from "./ipd-opd.routes";
import hospitalRoutes from "./hospital.routes";
import authUserRoutes from "./authUsers.routes";
import rfpROutes from "./rfp.routes";
import OtRoutes from "./operationTheator.routes";
import GraphRoutes from "./graph.routes";
import express from "express";

const app = express();

export const initRoutes = () => {
  //router for inventory
  app.use("/api/v1/inventory", inventory);

  //router for ipd
  app.use("/api/v1/ipd-opd", ipdOpdRoutes);

  //router for hospital
  app.use("/api/v1/hospital", hospitalRoutes);

  app.use("/api/v1/authUser", authUserRoutes);

  app.use("/api/v1/rfp", rfpROutes);

  app.use("/api/v1/ot", OtRoutes);

  app.use("/api/v1/graph", GraphRoutes);
  //router for application health check
  app.get("/ping", (_, res) => {
    res.status(200).send("pong");
  });
};

export default app;
