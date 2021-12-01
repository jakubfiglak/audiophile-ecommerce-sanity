export default {
  name: "heroImages",
  title: "Hero Images",
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
      media: "mobile.asset",
    },
    // prepare(selection) {
    //   const { name, quantity } = selection;
    //   return {
    //     title: `${name} - ${quantity} ${quantity === 1 ? "pc." : "pcs."}`,
    //   };
    // },
  },
};
