import { FaBoxOpen as icon } from "react-icons/fa";

export default {
  name: "boxContent",
  title: "Box Content",
  type: "object",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: "name",
      quantity: "quantity",
    },
    prepare(selection) {
      const { name, quantity } = selection;
      return {
        title: `${name} - ${quantity} ${quantity === 1 ? "pc." : "pcs."}`,
      };
    },
  },
};
