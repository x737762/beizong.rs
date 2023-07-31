const adminHome = async (ctx) => {
  console.log(111, ctx.query);
  const data = {
    menuId: ctx.query?.menuId ?? "1",
    list: [
      { id: "1", name: "首页" },
      { id: "2", name: "文章管理" },
      { id: "3", name: "随笔管理" },
      { id: "4", name: "分类管理" },
      { id: "5", name: "菜单管理" },
    ],
  };
  await ctx.render("adminHome", data);
};

export default adminHome;
