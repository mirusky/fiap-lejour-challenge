import { AppointmentController } from "./controller/AppointmentController";
import { FavoriteController } from "./controller/FavoriteController";
import { InvoiceController } from "./controller/InvoiceController";
import { UserController } from "./controller/UserController";
import { WeddingController } from "./controller/WeddingController";
import { InsightController } from "./controller/InsightController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
  },
  {
    method: "get",
    route: "/appointments",
    controller: AppointmentController,
    action: "all",
  },
  {
    method: "get",
    route: "/appointments/:id",
    controller: AppointmentController,
    action: "one",
  },
  {
    method: "post",
    route: "/appointments",
    controller: AppointmentController,
    action: "save",
  },
  {
    method: "delete",
    route: "/appointments/:id",
    controller: AppointmentController,
    action: "remove",
  },
  {
    method: "get",
    route: "/favorites",
    controller: FavoriteController,
    action: "all",
  },
  {
    method: "get",
    route: "/favorites/:id",
    controller: FavoriteController,
    action: "one",
  },
  {
    method: "post",
    route: "/favorites",
    controller: FavoriteController,
    action: "save",
  },
  {
    method: "delete",
    route: "/favorites/:id",
    controller: FavoriteController,
    action: "remove",
  },
  {
    method: "get",
    route: "/invoices",
    controller: InvoiceController,
    action: "all",
  },
  {
    method: "get",
    route: "/invoices/:id",
    controller: InvoiceController,
    action: "one",
  },
  {
    method: "post",
    route: "/invoices",
    controller: InvoiceController,
    action: "save",
  },
  {
    method: "delete",
    route: "/invoices/:id",
    controller: InvoiceController,
    action: "remove",
  },

  {
    method: "get",
    route: "/weddings",
    controller: WeddingController,
    action: "all",
  },
  {
    method: "get",
    route: "/weddings/:id",
    controller: WeddingController,
    action: "one",
  },
  {
    method: "post",
    route: "/weddings",
    controller: WeddingController,
    action: "save",
  },
  {
    method: "delete",
    route: "/weddings/:id",
    controller: WeddingController,
    action: "remove",
  },

  {
    method: "get",
    route: "/insights/weddings",
    controller: InsightController,
    action: "weddingMetrics",
  },
];
