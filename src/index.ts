import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import { User } from "./entity/User";
import Axios from "axios";

// const BASEURL = "https://sheet2api.com/v1/ByR2h1huRjyQ/fiap/"
// Axios.get(BASEURL +"/user").then((r) => {
//   const result = r.data as User[];
//   console.log(result);
// });

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // TODO: Check if exist data in database
    // If dont exist nothing populate, requesting data from https://sheet2api.com/v1/ByR2h1huRjyQ/fiap/
    // Otherwise do nothing

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
