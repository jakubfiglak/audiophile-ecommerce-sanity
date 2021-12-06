import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

import { FaMusic as icon } from "react-icons/fa";

export default {
  name: "category",
  title: "Category",
  type: "document",
  orderings: [orderRankOrdering],
  icon,
  fields: [
    orderRankField({ type: "category" }),
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
