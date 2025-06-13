import { onReady } from "@xatom/core";
import { globalFnRoutes, discountListRoutes, discountPageRoutes, loginRoutes } from "./routes";

onReady(() => {
  globalFnRoutes();
  discountListRoutes();
  discountPageRoutes();
  loginRoutes();
});

