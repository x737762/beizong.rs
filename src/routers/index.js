import Router from "koa-router";

const router = new Router();

import home from "./home.js";
import article from "./article.js";

// 首页
router.get("/", home);

// 详情
router.get("/:id", article);

export default router;
