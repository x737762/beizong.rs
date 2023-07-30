import db from "../../db/index.js";

const wiki = async (ctx) => {
  console.log("wiki", ctx.params.id, ctx.query.type);
  const { id: articleId } = ctx.params;

  const menuList = await db.select("SELECT * FROM menu;");
  const category = await db.select(
    "SELECT c.id, c.name,c.icon, a.title, a.uid FROM category c JOIN article a ON c.id = a.category;"
  );

  const tree = {};

  category.forEach((item) => {
    if (tree[item.id]) {
      const isActive = articleId === item.uid;
      tree[item.id].children.push({
        uid: item.uid,
        label: item.title,
        isActive,
      });
      if (isActive) {
        tree[item.id].isOpen = true;
      }
    } else {
      tree[item.id] = {
        id: item.id,
        label: item.name,
        icon: item.icon,
        isOpen: false,
        children: [],
      };
    }
  });

  let article = null;
  if (articleId) {
    const [res] = await db.select("SELECT * FROM article WHERE uid=?;", [
      articleId,
    ]);
    article = res;
  }

  await ctx.render("index", {
    menuList: menuList.map((item) => {
      item.isActive = item.url === "/wiki";
      return item;
    }),
    module: "wiki",
    category: Object.values(tree),
    article,
  });
};

export default wiki;
