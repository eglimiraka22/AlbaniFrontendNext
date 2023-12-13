import { client } from "../client";

export const getHeaderSlide = async () => {
  let offersQuery;

  offersQuery ='*[_type == "header"] [0] { _id, title,mainImage{asset-> {url,_id}}}';

  const result = await client.fetch(offersQuery);

  return result;
};
