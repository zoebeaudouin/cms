export default {
  name: "productOptionValue",
  type: "object",
  title: "Product option value",
  fields: [
    {
      name: "value",
      title: "Value",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Price",
      description: "Optional",
      name: "price",
      type: "number",
    },
    {
      name: "hexColor",
      title: "Color",
      description: "Optional",
      type: "colorPicker",
    },
  ],
};
