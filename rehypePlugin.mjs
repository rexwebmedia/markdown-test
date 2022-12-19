export default async function rehypePlugin() {
  return async (tree) => {
    console.log(tree);
  };
}
