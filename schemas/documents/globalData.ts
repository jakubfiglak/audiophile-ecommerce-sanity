import { FaDatabase as icon } from "react-icons/fa";

export default {
  title: "Global Data",
  name: "globalData",
  type: "document",
  __experimental_actions: ["update", "publish"],
  icon,
  fields: [
    {
      title: "Logo",
      name: "logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "About Section Content",
      name: "aboutSection",
      type: "aboutSection",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Footer Copy",
      name: "footerCopy",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Global Data",
      };
    },
  },
};
