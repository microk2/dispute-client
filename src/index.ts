require("dotenv").config({ path: ".env" });
import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import { IPartnerDisputePayload } from "./interfaces";

const verifyRequest = (req: Request, res: Response, next: NextFunction) => {
  const api_key: string | undefined = req.headers["x-api-key"] as string;
  const secret_api_key: string | undefined = String(process.env.API_KEY);

  if (api_key && secret_api_key && api_key === secret_api_key) {
    return next();
  }

  res.status(403).send("Verify - Forbidden"); // Forbidden
};

(async () => {
  const app: Express = express();

  app.use(cors());
  app.use(express.json());

  app.post("/", verifyRequest, async (req, res) => {
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
