import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Client that is able to read write patch delete (used for admin hooks)

export const client = createClient({
  projectId: "mc9iunkx",
  dataset: "production",
  useCdn: false, //used Cache and update not directly
  apiVersion: "2023-09-04", // use a UTC date string
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
