import Router from "koa-router";

const router = new Router();

import home from "./home.js";
import wiki from "./wiki.js";
import memo from "./memo.js";
import about from "./about.js";

router.get("/", home);
router.get("/wiki", wiki);
router.get("/wiki/:id", wiki);
router.get("/memo", memo);
router.get("/about", about);

export default router;
