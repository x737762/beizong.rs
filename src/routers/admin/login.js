// import { v4 as uuidv4 } from "uuid";

import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

import config from "../../../config/index.js";
import { generateMD5 } from "../../utils/utils.js";

const login = async (ctx) => {
  const { method } = ctx.request;
  if (method === "POST") {
    config.token = {};

    const { userName, password } = ctx.request.body;

    if (config.userName === userName && config.password === password) {
      const privateKey = fs.readFileSync(
        path.resolve(process.cwd(), "./config/private.pem")
      );

      const token = jwt.sign({ userName, password }, privateKey, {
        algorithm: "RS256",
        expiresIn: "1h",
      });

      const md5 = generateMD5(token);
      config.token[md5] = token;

      ctx.body = {
        code: 200,
        message: "登录成功",
        token: md5,
      };
    } else {
      ctx.body = {
        code: 400,
        message: "登录失败",
      };
    }
  } else {
    await ctx.render("login");
  }
};

export default login;
