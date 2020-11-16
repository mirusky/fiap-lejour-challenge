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
    route: "/insights/weddings/metrics",
    controller: InsightController,
    action: "weddingMetrics",
  },
  {
    method: "get",
    route: "/insights/vendor/favorites",
    controller: InsightController,
    action: "vendorFavorited",
  },
  {
    method: "get",
    route: "/insights/vendor/deny",
    controller: InsightController,
    action: "vendorDeny",
  },
  {
    method: "get",
    route: "/insights/vendor/accepts",
    controller: InsightController,
    action: "vendorAccepts",
  },
  {
    method: "get",
    route: "/insights/vendor/all",
    controller: InsightController,
    action: "vendorDenyAndAccepts",
  },
  {
    method: "get",
    route: "/insights/invoices/metrics",
    controller: InsightController,
    action: "invoicesMetrics",
  },
  {
    method: "get",
    route: "/insights/weddings/styles",
    controller: InsightController,
    action: "weddingStyles",
  },
  {
    method: "get",
    route: "/insights/vendor/metrics",
    controller: InsightController,
    action: "vendorMetrics",
  },
];
