import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import category from "./documents/category";
import product from "./documents/product";
import globalData from "./documents/globalData";
import mainImage from "./objects/mainImage";
import boxContent from "./objects/boxContent";
import heroImages from "./objects/responsiveImages";
import blockContent from "./objects/blockContent";
import aboutSection from "./objects/aboutSection";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    globalData,
    category,
    product,
    mainImage,
    blockContent,
    boxContent,
    heroImages,
    aboutSection,
  ]),
});
