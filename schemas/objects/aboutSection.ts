export default {
  name: "aboutSection",
  title: "About Section Content",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "responsiveImages",
      validation: (Rule) => Rule.required(),
    },
  ],
};
