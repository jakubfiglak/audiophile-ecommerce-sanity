import { FaHeadphones as icon } from "react-icons/fa";

export default {
  name: "product",
  title: "Product",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
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
      name: "heroImages",
      title: "Hero Images",
      type: "heroImages",
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
      type: "text",
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
      of: [{ type: "mainImage" }],
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
    },
    prepare(selection) {
      const { name, image } = selection;
      return {
        title: name,
        media: image,
      };
    },
  },
};
