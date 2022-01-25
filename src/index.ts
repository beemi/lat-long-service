/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import {router} from "./routes/postcode.router";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

/**
 * App Variables
 */

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/', router)

//Capture All 404 errors
app.use(function (req, res, next) {
    res.status(404).send('Unable to find the requested resource!');
});

/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
