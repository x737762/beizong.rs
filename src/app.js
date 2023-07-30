import Koa from "koa";
import views from "koa-views";
import koaStatic from "koa-static";
import bodyParser from "koa-bodyparser";

import { resolve } from "path";

import router from "./routers/index.js";

const app = new Koa();

app.use(bodyParser());

app.use(koaStatic(resolve(process.cwd(), "./src/public")));

app.use(views(resolve(process.cwd(), "./src/views"), { extension: "ejs" }));

app.use(router.routes());

app.listen(8090, () => {
  console.log("runing http://localhost:8090");
});
