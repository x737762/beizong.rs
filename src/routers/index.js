import Router from "koa-router";

const router = new Router();

import home from "./home.js";
import article from "./article.js";
import wiki from "./wiki.js";

router.get("/", home);
router.get("/wiki", wiki);
router.get("/wiki/:id", wiki);
router.get("/article/:id", article);

export default router;
