const home = async (ctx) => {
  console.log("首页", ctx.request.query);
  const { type, filterText } = ctx.request?.query;
  const userAgent = ctx.request.headers["user-agent"] ?? "";
  const isPc = userAgent.toLowerCase().includes("windows");

  if (typeof type === "string") {
    console.log("分类");
  }
  if (typeof filterText === "string") {
    console.log("搜索");
  }
  const articleList = [
    {
      title: "标题",
      desc: "简介",
      cover: "",
      pageviews: "9999",
      createTime: "2023-06-08 13:13:13",
      id: "asldfjasl1341241",
      labels: ["JavaScript", "vue"],
    },
  ];
  const menuList = [
    {
      id: "a",
      label: "JavaScript",
    },
  ];
  await ctx.render("index", {
    articleList,
    menuList: menuList.map((item) => {
      item.isActive = item.id === type;
      return item;
    }),
    isPc,
    lang: "zh-CN",
    isActive: true,
  });
};

export default home;
