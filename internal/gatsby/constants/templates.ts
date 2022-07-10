import path from "path"

const templates = Object.freeze({
  indexTemplate: path.resolve("./src/templates/IndexTemplate/index.tsx"),
  notFoundTemplate: path.resolve("./src/templates/NotFoundTemplate/index.tsx"),
  categoryTemplate: path.resolve("./src/templates/CategoryTemplate/index.tsx"),
  categoriesTemplate: path.resolve(
    "./src/templates/CategoriesTemplate/index.tsx"
  ),
  tagTemplate: path.resolve("./src/templates/TagTemplate/index.tsx"),
  tagsTemplate: path.resolve("./src/templates/TagsTemplate/index.tsx"),
  pageTemplate: path.resolve("./src/templates/PageTemplate/index.tsx"),
  postTemplate: path.resolve("./src/templates/PostTemplate/index.tsx"),
})

export default templates
