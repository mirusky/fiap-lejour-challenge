import "reflect-metadata";
import { createConnection, getManager } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import Axios from "axios";
import { User } from "./entity/User";
import { Appointment } from "./entity/Appointment";
import { Favorite } from "./entity/Favorite";
import { Invoice } from "./entity/Invoice";
import { Wedding } from "./entity/Wedding";

const BASEURL = "https://sheet2api.com/v1/ByR2h1huRjyQ/fiap";

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

    // Populating database with data
    getManager()
      .findOneOrFail(Appointment)
      .catch((e) => {
        Axios.get(BASEURL + "/appointment").then((result) => {
          const appointments = result.data as Appointment[];
          getManager().save(Appointment, appointments);
        });
      });
    getManager()
      .findOneOrFail(Favorite)
      .catch((e) => {
        Axios.get(BASEURL + "/wedding_favorites").then((result) => {
          const favorites = result.data as Favorite[];
          getManager().save(Favorite, favorites);
        });
      });
    getManager()
      .findOneOrFail(Invoice)
      .catch((e) => {
        Axios.get(BASEURL + "/invoice").then((result) => {
          const invoices = result.data as Invoice[];
          getManager().save(Invoice, invoices);
        });
      });
    getManager()
      .findOneOrFail(Wedding)
      .catch((e) => {
        Axios.get(BASEURL + "/wedding").then((result) => {
          let weddings = result.data as Wedding[];
          weddings.map((w) => {
            // HACK: Normalizing some fields since it's not normalized
            w.BUDGET = w.BUDGET.toString() == "NULL" ? null : w.BUDGET;
            w.WEDDING_DATE = w.WEDDING_DATE == "NULL" ? null : w.WEDDING_DATE;
            w.NUMBER_OF_GUESTS =
              typeof w.NUMBER_OF_GUESTS == "number" ? w.NUMBER_OF_GUESTS : null;
            return w;
          });
          getManager().save(Wedding, weddings);
        });
      });
    getManager()
      .findOneOrFail(User)
      .catch((e) => {
        Axios.get(BASEURL + "/user").then((result) => {
          const users = result.data as User[];
          getManager().save(User, users);
        });
      });

    // start express server
    app.listen(3000);

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
