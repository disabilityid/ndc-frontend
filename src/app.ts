import { onReady } from "@xatom/core";
import { globalFnRoutes, discountListRoutes, discountPageRoutes, loginRoutes } from "./routes";

onReady(() => {
  console.log('App ready');
  globalFnRoutes();
  discountListRoutes();
  discountPageRoutes();
  loginRoutes();
});
