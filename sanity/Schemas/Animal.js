export default {
  name: "animal",
  title: "Animaux",
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
