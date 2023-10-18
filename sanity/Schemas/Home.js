export default {
  name: "home",
  title: "Page d'accueil",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nom",
      type: "string",
    },
    {
      name: "content",
      title: "Texte",
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
