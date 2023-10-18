export default {
  name: "plant",
  title: "Plantes",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nom",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
