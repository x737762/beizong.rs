import Router from "koa-router";

const router = new Router();

import login from "./login.js";
import adminHome from "./adminHome.js";
import config from "../../../config/index.js";

import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

const publicKey = fs.readFileSync(
  path.resolve(process.cwd(), "./config/public.pem")
);

const isLogin = async (ctx, next) => {
  const { method } = ctx.request;
  const { token } = ctx.query;
  if (method === "POST") {
    console.log(111, ctx.request, ctx.query);
    console.log(111);
  } else {
    if (config.token[token]) {
      try {
        jwt.verify(config.token[token], publicKey, { algorithm: "RS256" });
        await next();
      } catch (error) {
        config.token = {};
        ctx.redirect("/admin/login");
        return;
      }
    } else {
      ctx.redirect("/admin/login");
      return;
    }
  }
};

router.get("/login", login);
router.post("/api/login", login);

router.get("/", isLogin, adminHome);

export default router;
