export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          validation: (Rule) => Rule.required(),
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "blurb",
      title: "Blurb",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      title: "Default variant",
      name: "defaultProductVariant",
      type: "productVariant",
    },
    {
      title: "Variants",
      name: "variants",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "productVariant",
        },
      ],
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      price: "defaultProductVariant.price",
      media: "images.0",
    },
    prepare(selection) {
      const { title, price, media } = selection;
      return {
        title,
        subtitle: price + "€",
        media,
      };
    },
  },
};
