import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { FaHeadphones as icon } from "react-icons/fa";

export default {
  name: "product",
  title: "Product",
  type: "document",
  orderings: [orderRankOrdering],
  icon,
  fields: [
    orderRankField({ type: "product" }),
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortName",
      title: "Short Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cartImage",
      title: "Cart Image",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroImages",
      title: "Hero Images",
      type: "responsiveImages",
    },
    {
      name: "productImages",
      title: "Product Images",
      type: "responsiveImages",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "previewImages",
      title: "Preview Images",
      description: "Images for the product preview on Category page",
      type: "responsiveImages",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "thumbnailImages",
      title: "Thumbnail Images",
      description:
        "Images for the product thumbnail in 'Related products' section",
      type: "responsiveImages",
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featuredImages",
      title: "Featured Images",
      type: "responsiveImages",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "new",
      title: "New",
      type: "boolean",
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "features",
      title: "Features",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "includes",
      title: "Includes",
      type: "array",
      of: [{ type: "boxContent" }],
      description: "What's in the box?",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "responsiveImages" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "related",
      title: "Related",
      type: "array",
      description: "Other products the customer may be interested in",
      of: [{ type: "reference", to: [{ type: "product" }] }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: "name",
      image: "image",
      featured: "featured",
    },
    prepare(selection) {
      const { name, image, featured } = selection;
      return {
        title: `${name} ${featured ? "???" : ""}`,
        media: image,
      };
    },
  },
};
