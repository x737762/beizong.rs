const article = async (ctx) => {
  console.log(23424);
  console.log("详情", ctx.params.id, ctx.query.type);
  await ctx.render("article");
};

export default article;
