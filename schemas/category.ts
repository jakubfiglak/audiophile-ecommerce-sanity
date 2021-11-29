import { MdCategory as icon } from "react-icons/md";

export default {
  name: "category",
  title: "Category",
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
