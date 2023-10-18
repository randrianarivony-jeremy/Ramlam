// import createImageUrlBuilder from "@sanity/image-url";

// import { dataset, projectId } from "../env";

// const imageBuilder = createImageUrlBuilder({
//   projectId: projectId || "",
//   dataset: dataset || "",
// });

// export const urlForImage = (source) => {
//   return imageBuilder?.image(source).auto("format").fit("max");
// };

import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlForImage = (source) => {
  return builder.image(source);
};
