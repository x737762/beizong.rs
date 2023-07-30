import Router from "koa-router";

const router = new Router();

import home from "./home.js";
import wiki from "./wiki.js";
import memo from "./memo.js";
import about from "./about.js";

import admin from "./admin/index.js";

router.use("/admin", admin.routes());

router.get("/", home);
router.get("/wiki", wiki);
router.get("/wiki/:id", wiki);
router.get("/memo", memo);
router.get("/about", about);

export default router;
