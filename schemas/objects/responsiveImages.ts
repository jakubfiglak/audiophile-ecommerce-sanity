export default {
  name: "responsiveImages",
  title: "Responsive Images",
  type: "object",
  fields: [
    {
      name: "mobile",
      title: "Mobile",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tablet",
      title: "Tablet",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "desktop",
      title: "Desktop",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: "mobile.alt",
      image: "mobile.asset",
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
