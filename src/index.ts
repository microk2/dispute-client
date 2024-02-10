require("dotenv").config({ path: ".env" });
import express, { Express } from "express";
import cors from "cors";
import { IPartnerDisputePayload } from "./interfaces";
import { Client } from "./classes/Client";

(async () => {
  const app: Express = express();

  app.use(cors({ origin: Client.allowedOrigins, optionsSuccessStatus: 200 }));
  app.use(express.json());

  app.post("/", async (req, res) => {
    const dispute = req.body as IPartnerDisputePayload;
    if (!dispute || !dispute.dispute_id) {
      res.status(400).send("Invalid body.");
      return;
    }

    // Handle your script after this line

    // Always send status 200 if you handled the request.
    // Any status other than 200 is considered FAIL and the service will requeue the request.
    res.sendStatus(200);
  });

  app.listen(process.env.SV_PORT, () => {
    console.log(`Client running on port ${process.env.SV_PORT}.`);
  });
})();
