import db from "../../db/index.js";

const about = async (ctx) => {
  const menuList = await db.select("SELECT * FROM menu;");
  // const aboutInfo = await db.select(
  //   "SELECT * FROM memo ORDER BY updateTime DESC;"
  // );
  await ctx.render("index", {
    module: "about",
    menuList: menuList.map((item) => {
      item.isActive = item.url === "/about";
      return item;
    }),
    aboutInfo: {},
  });
};

export default about;
