import { onReady } from "@xatom/core";
import { globalFnRoutes, discountListRoutes, discountPageRoutes, loginRoutes } from "./routes";

onReady(() => {
  console.log('App ready - Using checkMembership and ezLogin modules');
  globalFnRoutes();
  discountListRoutes();
  discountPageRoutes();
  loginRoutes();
});
