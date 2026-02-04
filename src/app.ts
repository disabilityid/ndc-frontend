import { onReady } from "@xatom/core";
import { globalFnRoutes, discountListRoutes, discountPageRoutes, loginRoutes } from "./routes";

onReady(() => {
  console.log('App ready - Using memCheck module');
  globalFnRoutes();
  discountListRoutes();
  discountPageRoutes();
  loginRoutes();
});
