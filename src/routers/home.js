import db from "../../db/index.js";

const home = async (ctx) => {
  const menuList = await db.select("SELECT * FROM menu;");
  const articleList = await db.select(
    "SELECT uid,title,describe,updateTime,cover,views,type FROM article ORDER BY updateTime DESC;"
  );
  await ctx.render("index", {
    module: "home",
    menuList: menuList.map((item) => {
      item.isActive = item.url === "/";
      return item;
    }),
    articleList,
  });
};

export default home;
