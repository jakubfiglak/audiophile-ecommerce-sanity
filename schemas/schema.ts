import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import category from "./documents/category";
import product from "./documents/product";
import mainImage from "./objects/mainImage";
import boxContent from "./objects/boxContent";
import heroImages from "./objects/heroImages";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    category,
    product,
    mainImage,
    boxContent,
    heroImages,
  ]),
});
