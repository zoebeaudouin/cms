export default {
  name: "productOption",
  type: "object",
  title: "Product option",
  fields: [
    {
      name: "name",
      title: "Option Name",
      type: "string",
    },
    {
      name: "values",
      title: "Option Values",
      type: "array",
      of: [
        {
          type: "productOptionValue",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
