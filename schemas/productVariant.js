export default {
  title: "Product variant",
  name: "productVariant",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Price",
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Stock quantity",
      name: "stock",
      type: "number",
    },
    {
      name: "hexColor",
      title: "Color",
      type: "colorPicker",
    },
    /*
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    */
  ],
};
