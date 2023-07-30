import db from "../../db/index.js";

const memo = async (ctx) => {
  const menuList = await db.select("SELECT * FROM menu;");
  const memoList = await db.select(
    "SELECT * FROM memo ORDER BY updateTime DESC;"
  );
  await ctx.render("index", {
    module: "memo",
    menuList: menuList.map((item) => {
      item.isActive = item.url === "/memo";
      return item;
    }),
    memoList,
  });
};

export default memo;
